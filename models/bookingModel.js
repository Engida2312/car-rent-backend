const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookingsSchema = new Schema(
{
    name: {
        type: String,
        required: true 
    }, 
    contact: {
        type: String,
        required: true 
    }, 
    issue_date: {
        type: Date,
        required: true 
    }, 
    return_date: {
        type: Date,
        required: true 
    }, 
    modal: {
        type: String, 
        ref: 'Cars',
        required: true 
    },  
    
}
)

const Bookings = mongoose.model('Bookings', BookingsSchema)
module.exports = Bookings