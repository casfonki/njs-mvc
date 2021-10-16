const express = require('express');
const {route} = require('./Core/Router');
const app = express()

global.rootPath = __dirname;
app.all("/*/",(req,res)=>{
    route(req,res)
})

app.listen(3000,()=>{
    console.log("started deadframe backend")
},);