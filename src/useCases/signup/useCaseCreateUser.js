const jwt = require("jsonwebtoken");
require('dotenv').config();

const entityUserCreate = require('../../entities/signup/entityCreateUser');

const { passwordSecret } = process.env;
const useCaseCreateUser = (db , userData) => new Promise(async (resolve , reject)=>{
    try {                
        const jwtPassword = jwt.sign(userData.password , passwordSecret);
        const updatedUserData = {...userData , password : jwtPassword};
        const result = await entityUserCreate(db , updatedUserData);
        resolve(result)
    } catch (error) {
        reject(error)
    }
})

module.exports = useCaseCreateUser;