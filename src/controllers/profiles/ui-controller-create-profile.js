const express = require('express');
const {check , validationResult} = require('express-validator');

const router = express.Router();
const auth = require('../../middlewares/auth');
const db = require('./db-controller-profile');
const useCaseCreateProfile = require('../../useCases/profile/useCaseCreateProfile');

router.post('/' , auth , async (req , res) => {
    try {
        const result = await useCaseCreateProfile(db , req.body);
        res.send(result);
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;