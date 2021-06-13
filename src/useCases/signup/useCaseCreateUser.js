const jwt = require("jsonwebtoken");
require('dotenv').config();

const entityUserCreate = require('../../entities/signup/entityCreateUser');
const entityGetUser = require('../../entities/signup/entityGetUser');

const { passwordSecret } = process.env;
const useCaseCreateUser = (db , userData) => new Promise(async (resolve , reject)=>{
    try {        
        const userDetails = await entityGetUser(db , userData.email);
        console.log(userDetails , 'userDetails' , userData.email)
        if(userDetails){
            reject("User already exist")
        }else{
            const jwtPassword = jwt.sign(userData.password , passwordSecret);
            const updatedUserData = {...userData , password : jwtPassword};
            const result = await entityUserCreate(db , updatedUserData);
            console.log(result , 'result')
            resolve(result)
        }            
    } catch (error) {
        reject(error)
    }
})

module.exports = useCaseCreateUser;