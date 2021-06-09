const jwt = require('jsonwebtoken');
require('dotenv').config();
const entityLoginUser = require('../../entities/login/entityLoginUser');


const useCaseLoginDetails = (db , loginData) => new Promise(async (resolve , reject) => {
    try {
        const { password } = loginData;                      
        loginData.password = jwt.sign(password , process.env.passwordSecret);        
        const result = await entityLoginUser(db , loginData);
        resolve(result)
    } catch (error) {
        reject(error)
    }
})

module.exports = useCaseLoginDetails;