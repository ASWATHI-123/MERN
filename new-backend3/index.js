const express = require('express');
const app = express();
const mongoose= require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const PORT = 4000;
const JWT_SECRETKEY = "hellooiuyjthrgfsc"
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
mongoose.connect("mongodb://localhost:27017/new0411")
.then((data) => console.log(data.connection.host))
.catch((err) => console.log(err));
 async function verifyToken(req,res,next){
//    const token = req.cookie.token;
   const {token} = req.cookies;

jwt.verify(token,JWT_SECRETKEY, (err, decode) =>{

    if(err){
       return res.send("Token error")
    }

    console.log(decode);

    next();
    

});
}

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const User = mongoose.model("User", userSchema);

app.post('/register', async (req, res, next) => {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
        return res.status(401).json({
            success: false,
            message: "Please enter fullname, email, and password"
        });
    }
    const hashedpassword =  await bcrypt.hash(password,10);
    console.log(hashedpassword);
    try {
        const user = await User.create({ fullname, email, password:hashedpassword });
        if (!user) {
            return res.send("Registration failed");
        }
        res.status(201).send("Registration completed");
    } catch (err) {
        res.send(err.message);
    }
});

app.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(401).json({
            success: false,
            message: "Please enter email and password"
        });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        const options = {
            userId : user._id
        }

        const token = await jwt.sign(options,JWT_SECRETKEY,{expiresIn:"10m"})
        console.log(token)


        res.status(200).cookie("token",token).json({
            success: true,
            message: "Logged in successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

app.put('/update/:id',verifyToken, async (req, res, next) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.cookies);

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


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
