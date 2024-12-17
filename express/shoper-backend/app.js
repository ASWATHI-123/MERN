const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
app.use('/api/v1',userRoutes);

module.exports = app;