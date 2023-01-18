const bodyParser = require("body-parser");
const express = require("express")
const app = express();
const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://engida:3CRnTMFqEfivRdXy@cluster0.smbsb.mongodb.net/carRent_api'
).then(()=>{
    console.log("db connected")
})

// parse application/json
app.use(bodyParser.json());
       
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const CarsRouter = require('./routes/cars_routes')
const BookingRouter = require('./routes/bookings_router')
 
app.use('/', CarsRouter)
app.use('/booking', BookingRouter)

app.use((req, res, next)=>{
    const err =new Error('Nor found')
    err.status = 404;
    next(err)
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


app.listen(3000, ()=>{
    console.log("server running on port 3000")
})
