const http = require('http')
const fs = require('fs');
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain')
    res.end('http server is working');
})
const PORT = 4000;
// fs.readFile('inputRead.txt',{encoding:'utf8'},(err,data)=>{
//     if(err){
//         return err.message
//     }else{
//         console.log(data)
// }
// });
try{
 const data = fs.readFileSync('inputRead.txt',{encoding:'utf8'});
 console.log(data)
}catch(error){
    console.log(error.message)
}

server.listen(PORT,()=>{
    console.log('server is working on PORT 4000');
   
});