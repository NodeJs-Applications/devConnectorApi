const User = require('../../models/User');

const createUser = (userData) => new Promise( async (resolve , reject) => {
    try {        
        const insertUser = {
            userName : userData.name,
            email : userData.email,
            password : userData.password
        }
        const result = await User.create(insertUser);
        resolve(result.toJSON().userId);
    } catch (error) {
        reject(error);
    }
})

const getUser = email => new Promise(async (resolve , reject) => {
    try {
        const result = await User.findOne({where : { email } });
        resolve(result);
    } catch (error) {
        reject(error);
    }
})

module.exports = {
    createUser,
    getUser
}
