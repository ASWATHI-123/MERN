const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost:27017/new06112024")
.then((data)=>console.log(data.connection.host))
.catch((err)=>console.log(err));

const PORT = 4000;
const userSchema = new mongoose.Schema({
    fullname :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true

    }
})
const User = mongoose.model("User",userSchema);

app.post('/register',async(req,res,next)=>{
   const {fullname ,email ,password} = req.body
   if(!fullname || !email || !password){
    return res.status(401).json({
        success:false,
        message:"Please enter fullname,email and  password"
    })
   }
   const hashedpassword = await bcrypt.hash(password,10);
   console.log(hashedpassword);
   try{
        const user = await User.create({fullname,email,password});
        if (!user){
            return res.send("Registrtion failed")
        }
        res.status(201).send("Registration completed");
   } catch(err){
        res.send(err.message);
   }
});
app.post('/login',(req,res,next)=>{
    res.send("Login router is working");

});

app.put('/update',(req,res,next)=>{
    res.send("Update route is working");
});

app.delete('/delete',(req,res,next)=>{
    res.send("Delete route is working");
});
app.listen(PORT,()=>{
    console.log(`server is working on PORT ${PORT}`);
});