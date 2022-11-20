const express = require('express')
const router = express.Router()
const LeaseController = require('../controllers/LeaseController')
const {authBearerMiddleware} = require('../middleware/auth.middleware')

// New Lease
router.post('/new',authBearerMiddleware, LeaseController.newLease)
router.patch('/update',authBearerMiddleware, LeaseController.updateLease)
router.get('/get',authBearerMiddleware, LeaseController.showLease)
router.get('/getAll/',authBearerMiddleware, LeaseController.showAll)

module.exports = router