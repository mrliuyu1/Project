// 配置数据库模板

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
        name : {
            type : String,
            unique : true,
            required : true
        },
        password : {
            type : String,

        },
    
})

module.exports = mongoose.model('user',userSchema)