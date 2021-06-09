const useCaseLoginDetails = require('../../useCases/login/useCaseLoginDetails');
const db = require('./db-controller-login');
const { check , validationResult } = require('express-validator');
const express = require('express');


const router = express.Router();

router.post('/' , [
    check('email' , 'Please enter valid email').isEmail(),
    check('password' , 'Password should n\'t empty').notEmpty(),
    check('password' , 'Password should contain minmum 5 letters').isLength({min : 5})
], async (req , res) => {   
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) res.status(400).json({errors : errors.array()})        
        const result = await useCaseLoginDetails(db , req.body);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;