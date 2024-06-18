const http = require('http');
const port = 8080;
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = fs.readFileSync('data.json', 'utf-8');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(`Server is live on port ${port}`);
    res.setHeader('Content-Type', 'text/html');
    res.end(index);
});

server.listen(port);