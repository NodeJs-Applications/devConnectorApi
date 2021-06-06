const User = require('../../models/User');

const createUser = (userData) => new Promise( async (resolve , reject) => {
    try {
        console.log(userData , 'userData')
        const insertUser = {
            userName : userData.name,
            email : userData.email,
            password : userData.password
        }
        const result = await User.create(insertUser);
        resolve(result);
    } catch (error) {
        reject(error);
    }
})

module.exports = {
    createUser
}
