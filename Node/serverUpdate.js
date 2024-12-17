const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text-plane');
    res.end("httpis working");
});

const PORT = 4000;
fs.appendFile('index.txt','The given content is updated',{encoding:'utf8'},(err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log('content updated')
    }
});
server.listen(PORT,()=>{
    console.log("Server is working")
});