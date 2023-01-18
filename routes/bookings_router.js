const express = require("express")
const router = express.Router()

const Bookings = require('../models/bookingModel')


// store booking 
router.post('/register', async(req, res, next )=>{
    try{
        const Booking = new Bookings(req.body)
        Booking.save()  
            .then((result)=>{
                res.send(result)
            }) 
            .catch((err)=>{
                console.log(err.message)
            })
    }catch(err){
        console.log(err.message)
    }
})


module.exports = router
