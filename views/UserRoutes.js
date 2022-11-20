const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const {authBearerMiddleware} = require('../middleware/auth.middleware')
// const validateAdmin = require('../middleware/auth.middleware')

router.get('/get', UserController.getUser)
router.patch('/update', UserController.patchUser)
router.delete('/delete/:id', UserController.deleteUser)

module.exports = router