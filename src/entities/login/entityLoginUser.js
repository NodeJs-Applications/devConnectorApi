const entityLoginUser = (db , loginData) => new Promise( async (resolve , reject) => {
    try {
        const result = await db.loginDetails(loginData);
        resolve(result)
    } catch (error) {
        reject(error)
    }
})

module.exports = entityLoginUser;