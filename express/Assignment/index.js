const express = require('express');
const app = express(); 
const PORT = 5000;
function middleware(req,res,next){
    console.log("Middleware is working");
    next();
}

app.get('/',middleware,(req, res, next) => {
    res.send("Root Router is working");
});

app.get('/user/:userID',middleware,(req,res,next)=>{
    const userID = req.params.userID;
    res.send(`user id is ${userID}`);
});
app.post('/Home',(req,res,next)=>{
    res.send("Home Router is working ");
});
app.post('/About',(req,res,next)=>{
    res.send("About Router is working")
});
app.post('/Service',(req,res,next)=>{
    res.send("Service Router is working");
});
app.get('/Contact',(req,res,next)=>{
    res.send("Contact Router is working")
});
app.get('/Blog',(req,res,next)=>{
    res.send("Blog Router is working");
})
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
