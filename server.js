const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});


app.listen(80, ()=>{
    console.log('Listing on port 3000....');
})