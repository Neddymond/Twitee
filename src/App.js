require("./db/mongoose.js");
const express = require("express");
const app = express();

// Routers
const userRouter = require("./routes/userRouter");

app.use(express.json());
app.use(userRouter);

module.exports = app;