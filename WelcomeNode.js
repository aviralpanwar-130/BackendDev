const http = require('http');

const express = require('express');

//const routes = require('./routes.js');

const app = express();

app.use((req,res,next)=>{
    console.log('Hello Avii');
    next();
});

app.use((req,res,next)=>{
    console.log('Hello Anjali');
    res.send(`<h1>Hii express</h1>`);
});



app.listen(4000);




