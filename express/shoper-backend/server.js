const express = require("express");
const dotenv = require('dotenv');
const app = require("./app");
dotenv.config({path:"./config/config.env"});

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
});

