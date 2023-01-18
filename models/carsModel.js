const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CarsSchema = new Schema(
{
    modal: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true 
    },
    vehicle_number: {
        type: Number,
        required: true 
    },
    max_seat: {
        type: Number,
        required: true 
    },
    color: {
        type: String,
        required: true 
    },
    rent_per_day: {
        type: Number,
        required: true 
    }
}
)

const Cars = mongoose.model('Cars', CarsSchema)
module.exports = Cars