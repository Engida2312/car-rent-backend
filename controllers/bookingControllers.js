
const Bookings = require('../models/bookingModel')

module.exports = {
    storeBooking: async(req, res, next )=>{
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
    }
}