const express = require("express")
const router = express.Router()

const CarsController = require('../controllers/carsControllers')

// get all list of cars 
router.get('/', CarsController.getAllListings)

// save a car
router.post('/list', CarsController.listCar)

// get a single car detail by model with current booking list booking list
router.get('/:modal', CarsController.findDetailByModal)

// update a single car
router.patch('/:id', CarsController.updateListing)  
 
// get a single car
router.delete('/:id', CarsController.deleteListing)


module.exports = router
