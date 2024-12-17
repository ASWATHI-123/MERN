const express = require('express');
const app = express();

const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const PORT = 5000;
app.use(express.urlencoded({extended:true}));

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/test")


.then((data) => console.log(data.connection.host))
.catch((err)=>console.log(err))

const userSchema = new mongoose.Schema({
    fullname : {
       type: String,
       required : true 
    },
    email : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required : true
    }  

})
const User = mongoose.model("User",userSchema);

app.post('/register',async(req,res,next)=>{
    const {fullname,email,password} = req.body

    if(!fullname || !email || !password){
       return res.status(401).json({
            success : false,
            message : "Please enter email and password"
            
        })
    }

    const hashedpassword =await bcrypt.hash(password,10)
    console.log(hashedpassword)
    try{

     const user =  await User.create({fullname,email,password:hashedpassword})
     if (!user){
      return  res.send("Registration failed")
     }
     res.send("registration completed")
    }catch(err){
        res.send(err.message);
    }
   
    
});
app.post('/login',(req,res,next)=>{
    res.send("Login Router successfully");
});
app.put('/update',(req,res,next)=>{
    res.send("Update router successfully");
});
app.delete('/delete',(req,res,next)=>{
    res.send("deleter router successfully");
})
app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
});