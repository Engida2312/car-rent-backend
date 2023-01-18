const express = require("express")
const router = express.Router()
const BookingController = require('../controllers/bookingControllers')

// store booking 
router.post('/register', BookingController.storeBooking)

module.exports = router
