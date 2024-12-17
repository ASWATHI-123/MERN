const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 4000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
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
const User = mongoose.model("User",userSchema)

// const req = {
//     body:{
//         fullname:"ram",
//         email:"ram@gmail.com",
//         password:123
//     }
// }

// const fullname = req.body.fullname;
    // const password = req.body.password;
    // const email = req.body.email;

app.post('/register',async(req,res,next)=>{
    
    const {fullname,email,password} = req.body;

    if(!fullname || !email || !password){
       return res.status(401).json({
            success : false,
            message : "Please enter email and password"
            
        })
    }

    const hashedpass = await bcrypt.hash(password,10);

    console.log(hashedpass);
    try{

     const user =  await User.create({fullname,email,password:hashedpass})
     if (!user){
      return  res.send("Registration failed")
     }
     res.send("registration completed")
    }catch(err){
        res.send(err.message);
    }
   
    
});


app.post('/login',async(req,res,next)=>{
    const {email,password} = req.body
    if(!email || !password) {
        return res.status(401).json({
            success: false,
            message: "please enter email and password"
        });
    }
    try{
        const user = await User.findOne({email});
        if(!user){
          return  res.send("user not found  ") 
        }
      const isMatch = await  bcrypt.compare(password,user.password)
        console.log(isMatch);

        if(!isMatch){
            return res.send("invalid credentials")
        }
        res.send("Logged in successfully")
    }catch(err){
        res.send(err.message)
    }

   
});

app.put('/update/:id',async(req,res,next)=>{
    console.log(req.params) 
    
    console.log(req.body);
    

    let user = await User.findById(req.params.id)

    user.fullname = req.body.fullname;

    const updatedUser = await user.save();
    console.log(updatedUser)

    res.send("update route is working");
});
app.delete('/delete/:id', async(req,res,next) => {
    try {
      let user = await User.findById(req.params.id);
  
      if (!user){
        return res.send("user not found")
      }
  
      await user.deleteOne();
      res.send("user deleted successfully");
    }catch(err){
      res.status(500).send(err.message);
    }
  });


app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
});
