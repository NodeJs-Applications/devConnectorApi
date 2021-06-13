const express = require('express');
const auth = require('../../middlewares/auth');
const router = express.Router();
const db = require('./db-controller-profile');
const useCaseGetProfile = require('../../useCases/profile/useCaseGetProfile');

router.get('/' , auth ,async (req , res)=>{    
    try {
        const result = await useCaseGetProfile(db , req.query.id);
        res.send(result)
    } catch (error) {
        res.send(error)
    }
    
})

module.exports = router