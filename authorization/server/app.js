const express =require('express');

const path= require('path')

const cors = require('cors');

const authRouter = require('./routes/authRoutes.js');


// configuration for web server

var app = express()
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json()); //it ensures evry response send is in json format
app.use(express.urlencoded({extended : true}));

app.use('/', authRouter);
//app.use('/api/1.10.0/auth', authRouter);
module.exports = app;