const express = require('express');
const app = express();


app.use(express.static('./public'));

// import middleware
const ffrouter = require('./router/ffrouter/ffrouter')

app.use('/', ffrouter);


//seting the template engine

// const path = require('path');
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'templates'))



module.exports = app;