const models = require('../models')
const {
    assertValidPasswordService,
    assertEmailIsUniqueService,
    assertEmailIsValid,
    createUserService,
    encryptPassword,
} = require("../services/auth.service.js");

const jsonwebtoken = require("jsonwebtoken");

const authLoginController = async(req, res) => {
    const {email, password} = req.body;
    const userFound = await models.User.findOne({where:{email:email}});
    if (!userFound) {
        res.status(401).json({message:"Password or email is incorrect"});
        return;
    }
    const hashedPassword = encryptPassword(password);
    if (hashedPassword !== userFound.password) {
        res.status(401).json({message: "Password or email is incorrect"});
        return;
    }

    const secret = process.env.JWT_SECRET || "";

    if (secret.length < 10) {
        throw new Error('JWT_SECRET is not set');
    }

    const jwt = jsonwebtoken.sign({
        email: userFound.email,
        user_role : userFound.user_role,
        user_id : userFound.user_id
    }, secret);

    res.status(200).json({
        message: "Login succesful",
        jwt: jwt,
    });
}

const authRegisterController = async (req, res) => {
    const body = req.body;
    // Validate password
    try {
        assertValidPasswordService(body.password);
    } catch (error) {
        console.error(error);
        res.status(400).json({message:"Invalid Password: " + error.message});
        return;
    }
    // Validate email is valid
    try {
        assertEmailIsValid(body.email);
    } catch (error) {
        console.error(error);
        res.status(400).json({message: "Email is invalid: " + error.message});
        return;
    }
    // Validate email is unique
    try {
        assertEmailIsUniqueService(body.email);
    } catch (error) {
        console.error(error);
        res.status(400).json({message: "Email is already registered: " + error.message});
        return
    }
    // Save user in DB
    try {
        delete body.user_role
        const userCreated = await createUserService(body);
        delete userCreated.password;
        delete userCreated.user_id;
        delete userCreated.user_role;
        res.status(201).json(userCreated)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }

}

module.exports = {
    authLoginController,
    authRegisterController,
}