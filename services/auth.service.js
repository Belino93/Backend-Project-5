const models = require('../models');
const crypto = require('node:crypto');

const assertValidPasswordService = (password) => {
    // Validate min characters
    if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
    }
    // Validate it has one lower case letter
    if (!password.match(/[a-z]/)) {
        throw new Error('Password must have at least one lower case letter')
    }
    // Validate ir has one upper case letter
    if (!password.match(/[A-Z]/)) {
        throw new Error('Password must have at least one upper case letter')
    }
    // Validate it has one number
    if (!password.match(/[0-9]/)) {
        throw new Error('Password must have at least one number')
    }
}

const assertEmailIsUniqueService = async (email) => {
    // Validate is unique in DB
    const user = await models.User.findOne({ where: {email: email} })
    if (user) {
        throw new Error('Email is already in use')
    }
}

function encryptPassword(password) {
    const hash = crypto
        .createHmac("sha512", 'no salt for now // TODO: REALLY NEED TO ADD SALT?')
        .update(password)
        .digest("base64");
    return hash;
}

const createUserService = async (userBody) => {
    delete userBody.id;
    const hash = encryptPassword(userBody.password);
    userBody.password = hash;
    const user = await models.User.create(userBody)
    return user
}

const assertEmailIsValid = (email) => {
    // must validate a valid email
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return emailRegex.test(email);
    const isValid = email.match(emailRegex);
    if (!isValid) {
        throw new Error("Email is invalid");
    }
}

const isValidUserAndPassword = async (user, password) => {
    const userDb = await models.User.findOne({ where: { email: user } })
    if (userDb) {
        const hash = encryptPassword(password)
        return hash === userDb.password
    }
    return false;
}

module.exports = {
    assertValidPasswordService,
    assertEmailIsUniqueService,
    assertEmailIsValid,
    createUserService,
    isValidUserAndPassword,
    encryptPassword
}