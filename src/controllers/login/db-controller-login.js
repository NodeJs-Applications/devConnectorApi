const User = require('../../models/User');

const loginDetails = loginData => new Promise(async (resolve , reject) => {
    try {
        const { email , password } = loginData
        const result = await User.findOne({ email });        
        if(result){
            if (result.password === password){
                resolve({token : result.password})
            }
        }else {
            reject("User doesn't exist");
        }
    } catch (error) {
        reject(error)
    }
})

module.exports = {
    loginDetails
}