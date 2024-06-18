const port = 8080;

const express = require('express');
const server = express();


server.get('/', (req, res) => {
    res.json({type:'GET'});
});
server.post('/', (req, res)=>{
    res.json({type:'POST'});
});
server.put('/',(req, res)=>{
    res.json({type:'PUT'});
});
server.delete('/', (req, res)=>{
    res.json({type:'DELETE'});
});



server.listen(port, () => {
    console.log(`Server is live on port ${port}...`)
});