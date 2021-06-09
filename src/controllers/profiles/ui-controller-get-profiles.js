const express = require('express');
const auth = require('../../middlewares/auth');
const router = express.Router();

router.get('/' , auth ,async (req , res)=>{    
    res.send(req.token)
})

module.exports = router