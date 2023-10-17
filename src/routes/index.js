/* eslint-disable linebreak-style */
const express = require('express');

const app = express();
const userAuth = require('./api/web/userAuth.router');
app.use('/user', userAuth);


// app.use('/', global);

module.exports = app;
