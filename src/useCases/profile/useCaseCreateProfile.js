const entityCreateProfile = require('../../entities/profile/entityCreateProfile');

const useCaseCreateProfile = (db , profileData) => new Promise(async (resolve , reject) => {
    try {
        const result = await entityCreateProfile(db , profileData);
        resolve(result)
    } catch (error) {
        reject(error)
    }
})

module.exports = useCaseCreateProfile;