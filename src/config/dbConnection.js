const Sequelize = require('sequelize');
require("dotenv").config();

const { dbName , dbUserName , dbPassword , host , dialect } = process.env;
const sequelize = new Sequelize(dbName , dbUserName , dbPassword , {
    host : host,
    dialect : dialect
})


const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("DB Connection Successfull");
    } catch (error) {
        console.log("DB Connection Failed");
    }

    try {
        await sequelize.sync({alert : true});
        console.log("All models are in sync");
    } catch (error) {
        console.log("Models are not in sync")
    }
}

dbConnection();

module.exports = sequelize