const express = require('express');

const routes = express();

const loginRouter = require('./ui-controller-login');
routes.use('/login' , loginRouter);

module.exports = routes