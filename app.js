
const express = require('express');
const app = express();



const userRouter = require('./routes/userroutes');
app.use(express.json())

app.use('/api/Users',userRouter);

module.exports = app;