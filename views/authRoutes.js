const express = require("express");
const authRouter = express.Router();

const {
    authLoginController,
    authRegisterController,
} = require('../controllers/auth.controller');


authRouter.post('/register', authRegisterController) 
authRouter.post('/login', authLoginController)

module.exports = authRouter