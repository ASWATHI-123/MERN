const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    res.end('http is working')
});
const PORT = 4000;
// fs.writeFile('inputWrite.txt','hello',{encoding:'utf8'},(err)=>{
//     if(err){
//         console.log(err.message);
//     }else{
//         console.log('content added');
//     }
// });


try{
    fs.writeFileSync('inputWrite.txt','hello',{encoding:'utf8'});

}catch(error){
    console.log(error.message);
}


server.listen(PORT,()=>{
    console.log("Server is working");
});

