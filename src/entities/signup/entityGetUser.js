const entityGetUser = (db , email) => new Promise(async (resolve , reject)=>{
    try {
        const result = db.getUser(email);
        resolve(result);
    } catch (error) {
        reject(error);
    }
})

module.exports = entityGetUser;