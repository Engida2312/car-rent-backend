const express = require("express")
const router = express.Router()

router.get('/', (req, res, next )=>{
    res.send('list of cars')
})


router.post('/', (req, res, next )=>{
    res.send('post car detail')
})


router.get('/:id', (req, res, next )=>{
    res.send('single car detail')
})

module.exports = router
