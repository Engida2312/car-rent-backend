
const Cars = require('../models/carsModel')
const Bookings = require('../models/bookingModel')
const createError = require('http-errors')
const mongoose = require('mongoose')

module.exports = {
    getAllListings: async(req, res, next )=>{
        try{
            const results = await Cars.find({}, {__v: 0})
            res.send(results)  
        }catch(err){
            console.log(err.message)
        }
    },
 
    listCar: (req, res, next )=>{
        const car = new Cars(req.body)
        car.save()  
            .then((result)=>{
                res.send(result)
            }) 
            .catch((err)=>{
                console.log(err.message)
                if(err.name === 'ValidationError'){
                    next(createError(422, err.message))
                    return
                }
                next(err)
            })
    
    },

    findDetailByModal: async(req, res, next )=>{
        const modal = req.params.modal
        try{
            const result1 = await Cars.findOne({modal: modal})
            var result2
            if(!result1){
                throw createError(404, "car does not exist")
            }else{
                const currentDate = new Date()
                result2 = await Bookings.findOne({
                    modal: modal,
                    issue_date: { $lte: currentDate },
                    return_date: { $gte: currentDate }
                }) 
            }
    
            const results = {
                carDetail: result1,
                currentBooking: result2
            }
    
            res.send(results)  
        }catch(err){
            console.log(err.message)
            next(err)
        }
    },

    updateListing: async(req, res, next )=>{
        const id = req.params.id
        const updates = req.body
        const options = {new: true}
    
        try{
            const results = await Cars.findByIdAndUpdate(id, updates, options)
            if(!results){
                throw createError(404, "car does not exist")
            }
            res.send(results)  
        }catch(err){
            console.log(err.message)
            if(err instanceof mongoose.CastError) {
                next(createError(400, "Invalid Id please use correct id"))
                return
            }
            next(err)
        }
    },

    deleteListing: async(req, res, next )=>{
        const id = req.params.id
        try{
            const results = await Cars.findByIdAndDelete(id)
            if(!results){
                throw createError(404, "car does not exist")
            }
            res.send(results)  
        }catch(err){
            console.log(err.message)
            if(err instanceof mongoose.CastError) {
                next(createError(400, "Invalid Id please use correct id"))
                return
            }
            next(err)
        }
    }
}