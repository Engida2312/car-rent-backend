const express = require("express")
const router = express.Router()

router.get('/', (req, res, next )=>{
    res.send('list of cars')
})



module.exports = router
