const express = require("express")
const app = express();

app.get('/', (req, res, next)=>{
    res.send("home")
})

const CarsRouter = require('./routes/cars')

app.use('/cars', CarsRouter)

app.listen(3000, ()=>{
    console.log("server running on port 3000")
})

console.log("this is the first server")