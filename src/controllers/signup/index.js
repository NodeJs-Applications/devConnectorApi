const express = require('express');
const createUser = require('./ui-controller-create-user')
const signUpRoutes = express();

signUpRoutes.use('/signup' , createUser);

module.exports = signUpRoutes;