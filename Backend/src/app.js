const express = require('express');
const aiRoutes= require('./routes/ai.routes')


const app=express()

app.get('/', (req, res)=>{
    res.send('Hello from this route ')
})

app.use('/ai', aiRoutes)

module.exports=app;