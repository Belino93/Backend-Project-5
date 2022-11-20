const { sequelize } = require('../models')
const models = require('../models')
const {
    assertValidPasswordService,
    encryptPassword
} = require('../services/auth.service')


const UserController = {}


// Get user
UserController.getUser = async (req, res) => {
    const email = req.auth.email;
    try {
        const resp = await models.User.findOne({
            where: { email: email },
            attributes: ['name', 'user_role', 'email']
        })
        res.send(resp);
    } catch (error) {
        res.send(error);
    }


}

//Update User
UserController.patchUser = async (req, res) => {
    const { name } = req.body;

    try {
        await models.User.update({
            name: name,
        },
            {
                where: { email: req.auth.email }
            })
        res.send('Register updated succesfully')
    } catch (error) {
        res.send(error);
    }
}

// Delete User
UserController.deleteUser = async (req, res) => {
    let user_role = req.auth.user_role
    console.log(user_role)
    let deleteId = req.params.id
    if (user_role === 1) {
        try {

            let resp = await models.User.destroy({
                where: {
                    user_id : deleteId
                }
            })
            if (resp === 1) {
                res.send('User deleted succesfully');
            } else {
                throw new Error('User error');
            }
        } catch (error) {
            res.send(`${error}`);
        }
    }else{
        res.status(401).json({message: 'Only admins can do this'})
    }

}

module.exports = UserController;