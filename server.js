const http = require('http');

//create a server

let server = http.createServer((req, res)=>{
    res.end("Node js app deploying...");
});

server.listen(3000, ()=>{
    console.log('Listing server...')
});
