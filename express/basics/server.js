const express = require('express');
const app = express();
const PORT = 4000;
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");

// Middleware
const users = [
     {  
        id: 1,
        fullname: "tom",
        email: "tom@gmail.com",
        password: "" // Will store hashed password
    }
];

// Hash the initial password
bcrypt.hash("123", 10, (err, hash) => {
    users[0].password = hash;
});

function authenticate(req, res, next) {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token provided",
        });
    }

    jwt.verify(token, "dasdasdasfafsdfsdfsdf", (err, decoded) => {
        if (err) {
            return res.status(401).json({
                success: false,
                message: "Invalid Token",
            });
        }
        req.userID = decoded.userID; 
        next();
    });
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieparser());

app.get('/', (req, res) => {
    res.send("Root Route is working");
});

app.post('/Login', (req, res) => {
    const { email, password } = req.body; 
    
    if(!email || !password) {
        return res.status(401).json({
            success: false,
            message: "Please enter email and password"
        });
    }

    const user = users.find((u) => u.email === email);
    if (!user) {
        return res.status(401).json({
            success: false,
            message: "User with your email does not exist"
        });
    }
    
    const isPasswordMatched = bcrypt.compareSync(password, user.password);
    if (!isPasswordMatched) {
        return res.status(401).json({
            success: false,
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign({ userID: user.id }, "jfgmahfjkahk", { expiresIn: '30m' });
    res.cookie('token', token);

    res.status(200).json({
        success: true,
        message: "Logged in successfully",
        user: {
            email,
        }
    });
});

app.get('/Profile', authenticate, (req, res) => {
    const user = users.find((u) => u.id === req.userID);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
    }
    res.status(200).json({
        success: true,
        message: "Profile retrieved successfully",
        user: {
            fullname: user.fullname,
            email: user.email,
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});