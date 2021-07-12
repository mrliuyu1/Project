const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/liuyu',{
    useCreateIndex : true,
    useFindAndModify : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
})