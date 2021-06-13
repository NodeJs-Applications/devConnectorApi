const { Sequelize , DataTypes , Model} = require("sequelize");
const sequelize = require('../config/dbConnection');


class Profile extends Model {};

Profile.init({
    profileId : {
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4,
        primaryKey : true
    },
    company : {
        type : DataTypes.STRING        
    },
    website : {
        type : DataTypes.STRING
    },
    location : {
        type : DataTypes.STRING
    },
    status : {
        type: DataTypes.STRING,
        allowNull : false
    },
    skills : {
        type : DataTypes.JSON,
        allowNull : false
    },
    bio : {
        type : DataTypes.STRING
    },
    githubusername : {
        type : DataTypes.STRING
    }
},{
    sequelize,
    tableName : 'tbl_profile'
})





module.exports = Profile;