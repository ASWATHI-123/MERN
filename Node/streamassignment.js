const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    res.end("The sever is working");
});
const PORT = 5000;
const readStream = fs.createReadStream('index.txt',{encoding:'utf8'});
readStream.on('data',(chunk)=>{
    console.log("New chunks",chunk);
});
readStream.on('end',()=>{
    console.log("No more data");
});
server.listen(PORT,()=>{
    console.log("Server is running on PORT 5000");
});