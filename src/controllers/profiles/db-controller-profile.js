const Profile = require('../../models/Profile');

const getProfileDetails = profileId => new Promise(async (resolve , reject) => {
    try {
        const profileDetails = await Profile.findOne({where : { profileId }});
        if(profileDetails){
            resolve(profileDetails);
        }else {
            reject('Profile doesn\'t exist')
        }
        
    } catch (error) {
        reject(error);
    }
})

const createProfileDetails = profileDetails => new Promise(async (resolve , reject) => {
    try {
        const profileData = {
            company : profileDetails.company,
            website : profileDetails.website,
            location : profileDetails.location,
            status : profileDetails.status,
            skills : profileDetails.skills,
            bio : profileDetails.bio,
            githubusername : profileDetails.githubusername,
            UserUserId : profileDetails.userId
        }
        const result = await Profile.create(profileData);
        resolve(result);
    } catch (error) {
        reject(error);
    }
})

module.exports = {
    getProfileDetails,
    createProfileDetails
}