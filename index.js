;(async function(){
    const express = require('express');
    const ejs = require('ejs')
    const cookieParser = require('cookie-parser');
    const logicRouter = require('./router/logic')
    const htmlRouter = require('./router/html')
const db = require('./dbs/db')
await db
console.log('数据库连接成功');
const app = express();
app.use(express.static('assets'))
app.use(express.urlencoded({ extended : true }))
app.use(cookieParser());
app.set('view engine','ejs')
app.set('views', './ejs')



app.use(logicRouter);
app.use(htmlRouter);
app.listen(5000,(err) => {

    if(err){
        console.log('服务器开启失败');
    }else{
        console.log('服务器开启成功');
    }
})
})()