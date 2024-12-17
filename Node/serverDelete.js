const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text-plain');
    res.end('http is working');
});
const PORT = 4000;
fs.unlink('index.txt',(err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log('file deleted');
    }
});
server.listen(PORT,()=>{
    console.log('server is working');
});
