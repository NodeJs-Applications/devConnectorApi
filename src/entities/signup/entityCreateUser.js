const entityCreateUser = (db , userData) => new Promise(async (resolve , reject) => {
    try {
        const result = await db.createUser(userData);
        resolve(result);
    } catch (error) {
        reject(error)
    }
})

module.exports = entityCreateUser;