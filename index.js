const { urlencoded } = require('express');
const bodyParser = require('body-parser');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());


const todoRoute = require('./routes/todo');
app.use('/',todoRoute);

const userRoutes = require('./routes/user');
app.use('/user', userRoutes);


require("dotenv").config();
 require("./db");

app.listen(3000,  () => console.log("Server up and running"));