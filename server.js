const http = require('http');
const fs = require('fs');

const Api = [
    {
        "name": "dheeraj",
        "age": 19,
        "vill": "bhalni"
    },
    {
        "name": "rajneesh",
        "age": 18,
        "vill": "betauna"
    },
    {
        "name": "nitish",
        "age": 17,
        "vill": "bhalni"
    },
    {
        "name": "pawan",
        "age": 18.2,
        "vill": "bhalni"
    }
]
let content = fs.readFileSync('text.txt', 'utf-8');

//create a server

let server = http.createServer((req, res)=>{
    res.end(Api);
});

server.listen(3000, ()=>{
    console.log('Listing server...')
});
