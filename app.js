const express = require('express');
const {route} = require('./Core/Router');
const app = express()

global.rootPath = __dirname;
global.mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/deadframe');
app.all("/*/",(req,res)=>{
    route(req,res)
})
app.use('/static', express.static(__dirname + '/public'));
app.listen(3000,()=>{
    console.log("started deadframe backend")
},);