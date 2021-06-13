const express = require("express");

const profileRoutes = express();

const getProfileRoute = require('./ui-controller-get-profiles');
const createProfileRoute = require('./ui-controller-create-profile');

profileRoutes.use('/profile' , getProfileRoute);
profileRoutes.use('/profile' , createProfileRoute);

module.exports = profileRoutes;

