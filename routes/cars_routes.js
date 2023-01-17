const express = require("express")
const router = express.Router()

const Cars = require('../models/carsModel')

router.get('/', (req, res, next )=>{
    res.send('list of cars')
})


router.post('/', (req, res, next )=>{
    res.send('post car detail')
    const car = new Cars({
        modal: req.body.modal,
        description: req.body.description,
        vehicle_number: req.body.vehicle_number,
        max_seat: req.body.max_seat,
        color: req.body.color,
        rent_per_day: req.body.rent_per_day,
        
    })
    car.save()
        .then((result)=>{
            console.log(result)
            res.send(result)
        })
        .catch((err)=>{
            console.log(err.message)
        })

})


router.get('/:id', (req, res, next )=>{
    res.send('single car detail')
})

module.exports = router
