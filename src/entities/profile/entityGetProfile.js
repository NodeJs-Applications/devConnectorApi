const entityGetProfile = (db , id) => new Promise(async (resolve , reject) => {
    try {
        const result = await db.getProfileDetails(id);
        resolve(result)
    } catch (error) {
        reject(error)
    }
})

module.exports = entityGetProfile;