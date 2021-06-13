const entityCreateProfile = (db , profileData) => new Promise(async (resolve , reject) => {
    try {
        const result = db.createProfileDetails(profileData);
        resolve(result);
    } catch (error) {
        reject(error);
    }
})

module.exports = entityCreateProfile;