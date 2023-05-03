const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

//const routes = require('./routes.js');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req,res,next)=>{
    console.log(`Hii I am mortal`);
    next();
});

app.use('/add-product',(req,res,next)=>{
    res.send(`<form action="/product" method="POST"><input type="text" name="title"><button>Submit</button></form>`);
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send(`<h1>Hii express</h1>`);
});



app.listen(4000);




