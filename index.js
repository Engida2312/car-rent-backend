const express = require("express")
const app = express();

app.get('/', (req, res, next)=>{
    res.send("home")
})

const CarsRouter = require('./routes/cars')

app.use('/cars', CarsRouter)

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
