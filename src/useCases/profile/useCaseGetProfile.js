const entityGetProfile = require("../../entities/profile/entityGetProfile")

const useCaseGetProfile = (db , id) => new Promise(async (resolve , reject) => {
    try {
        const result = await entityGetProfile(db , id);
        resolve(result);
    } catch (error) {
        reject(error);
    }
})

module.exports = useCaseGetProfile