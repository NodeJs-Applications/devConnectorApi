const express = require("express");
const {body , validationResult } = require("express-validator");
const db = require('./db-controller-signup');
const useCaseCreateUser = require('../../useCases/signup/useCaseCreateUser');
const router = express.Router();

router.post('/' ,[
    body("name").not().isEmpty().withMessage("User name should not be empty"),
    body("email").isEmail().withMessage("Email should be valid"),
    body("password").isLength({ min: 5 }).withMessage("must be at least 5 chars long")
] ,async (req ,res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors : errors.array()})
        }
        console.log(req.body, 'userData')
        const result = await useCaseCreateUser(db , req.body);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
})



module.exports = router;