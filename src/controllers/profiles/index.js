const express = require("express");

const profileRoutes = express();

const getProfileRoute = require('./ui-controller-get-profiles');

profileRoutes.use('/profile' , getProfileRoute);

module.exports = profileRoutes;

