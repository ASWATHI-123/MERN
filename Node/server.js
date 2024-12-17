const http = require('http');
// 200-299 = success 300-399
const fs = require('fs');
const server =http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-Type','text/plain');
    res.end('Http server is working');
});
const PORT = 4000;
// const readStream = fs.createReadStream('input.txt',{encoding:'utf8'});
// readStream.on('data',(chunk)=>{
//     console.log('New chunks',chunk);
// });


// readStream.on('end',()=>{
//     console.log('No more data')

//});

// fs.readFile('input.txt',{encoding:'utf8'},(err,data)=>{
//     if(err){
//         return err.message
//     }
//     console.log(data)
// });
// try{
//  const data = fs.readFileSync('input.txt',{encoding:'utf8'});
//  console.log(data)
// }
// catch (error){
//     console.log(error.message)
// }


// fs.writeFile('input2.txt','sample data is added',{encoding:'utf8'},(err)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log('content added!')
//     }
// })

try{
    fs.writeFileSync('input2.txt','sample data for writing',{encoding:'utf8'});

}catch(error){
    console.log(error.message)
}


server.listen(PORT,()=>{
    console.log('server is running on PORT 4000');
});