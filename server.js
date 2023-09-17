const http = require('http');
const fs = require('fs');

let content = fs.readFileSync('text.txt', 'utf-8');

//create a server

let server = http.createServer((req, res)=>{
    res.end(content + "Node js app deploying...");
});

server.listen(3000, ()=>{
    console.log('Listing server...')
});
