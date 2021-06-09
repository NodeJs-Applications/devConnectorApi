const express = require("express");
const signUpRoutes = require("./src/controllers/signup");
const loginRoutes = require('./src/controllers/login');
const profileRoutes = require("./src/controllers/profiles");

const routes = express();



routes.use(signUpRoutes)
routes.use(loginRoutes)
routes.use(profileRoutes)

module.exports = routes;