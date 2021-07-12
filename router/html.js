const express = require('express')
const router = express.Router()
const {resolve} = require('path')

router.get('/register',(req,res) => {
   res.sendFile(resolve(__dirname,'../assets/view','register.html'))
})
router.get('/login',(req,res) => {
    res.sendFile(resolve(__dirname,'../assets/view','login.html'))
})


module.exports = router