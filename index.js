const bodyParser = require("body-parser");
const express = require("express")
const app = express();
const mongoose = require('mongoose')
const createError = require('http-errors')
const dontenv = require('dotenv').config()

const cors = require('cors')
app.use(cors())



// parse application/json
app.use(bodyParser.json());
       
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const CarsRouter = require('./routes/cars_routes')
const BookingRouter = require('./routes/bookings_router')
 
app.use('/', CarsRouter)
app.use('/booking', BookingRouter)

app.use((req, res, next)=>{
    // const err =new Error('Nor found')
    // err.status = 404;
    // next(err)
    next(createError(404, 'Not found'));
})

// error handler
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

const PORT = process.env.PORT|3000
mongoose.connect(
    process.env.MONGODB_URI
).then(()=>{
    app.listen(PORT, ()=>{
        console.log("server running on port "+ PORT + "...")
    })
    console.log("db connected")
})

