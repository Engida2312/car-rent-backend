const express = require("express")
const router = express.Router()

const Cars = require('../models/carsModel')
const Bookings = require('../models/bookingModel')

// save a car
router.post('/list', (req, res, next )=>{
    const car = new Cars(req.body)
    car.save()  
        .then((result)=>{
            res.send(result)
        }) 
        .catch((err)=>{
            console.log(err.message)
        })

})

// get all list of cars 
router.get('/', async(req, res, next )=>{
    try{
        const results = await Cars.find({}, {__v: 0})
        res.send(results)  
    }catch(err){
        console.log(err.message)
    }
})

// get a single car detail by model with current booking list booking list
router.get('/:modal', async(req, res, next )=>{
    const modal = req.params.modal
    try{
        const result1 = await Cars.findOne({modal: modal})
        const currentDate = new Date()
        const result2 = await Bookings.findOne({
            modal: modal,
            issue_date: { $lte: currentDate },
            return_date: { $gte: currentDate }
        })
        const results = {
            carDetail: result1,
            currentBooking: result2
        }
        res.send(results)  
    }catch(err){
        console.log(err.message)
    }
})


// update a single car
router.patch('/:id', async(req, res, next )=>{
    const id = req.params.id
    const updates = req.body
    const options = {new: true}

    try{
        const results = await Cars.findByIdAndUpdate(id, updates, options)
        res.send(results)  
    }catch(err){
        console.log(err.message)
    }
})  
 
// get a single car
router.delete('/:id', async(req, res, next )=>{
    const id = req.params.id
    try{
        const results = await Cars.findByIdAndDelete(id)
        res.send(results)  
    }catch(err){
        console.log(err.message)
    }
})


module.exports = router
