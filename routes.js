const express = require("express");
const signUpRoutes = require("./src/controllers/signup");

const routes = express();



routes.use(signUpRoutes)

module.exports = routes;