const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html','utf-8');
const data = fs.readFileSync('data.json','utf-8');


const server = http.createServer((req, res)=>{

    console.log(req.url);
    console.log('Server is live...');
    res.setHeader('Demo', 'DemoValue');
    // res.setHeader('Content-Type','text/html')
    res.setHeader('Content-Type', 'application/json');

    res.end(data);

});

server.listen(8080);