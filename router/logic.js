const express = require('express')
const router = express.Router()
const models = require('../dbs/model')
router.post('/register', async(req,res) => {
        const {username, password} = req.body
    await models.create({name: username, password: password})
    res.redirect('http://localhost:5000/view/open.html')
})
router.post('/login', async(req,res) => {
    const{username, password} = req.body
  const result = await models.findOne({name: username, password: password})
    if(result){
        res.cookie('userid',result.id)
        res.redirect('http://localhost:5000/home?id='+result.id)
    }else{
        res.send('登陆失败')
    }
})

router.get('/home',async(req,res) => {
    console.log(req.query);
    const id = req.cookies.userid
    if(id){
        const user = await  models.findOne({_id:id})
        res.render('home',user)
    }else(
        res.redirect('http://localhost:5000/login')
    )
   
})

router.post('/find' , async(req,res) =>{
        const user = req.body
        const result = await models.findOne({name:user.name})
        
       if(result){
           res.send({
               code:100,
               msg:'名字重复'
           })
       }
       
        
})

module.exports = router