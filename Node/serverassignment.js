
const { log } = require('console');
const http = require('http');
const server = http.createServer((re,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    res.end("http is working");
});
const PORT = 4000;
server.listen(PORT,()=>{
    console.log("server is  running on PORT 4000")
})
