const {Sequelize , DataTypes , Model} = require("sequelize");
const sequelize = require('../config/dbConnection');

class User extends Model {}

User.init({
    userId : {
    type : DataTypes.UUID,
    defaultValue : Sequelize.UUIDV4,
    primaryKey : true
    },
    userName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING        
    },
    password : {
        type : DataTypes.STRING
    }   
} , {
    sequelize , 
    tableName : 'tbl_user'
})

module.exports = User;