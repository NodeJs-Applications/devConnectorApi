const jwt = require("jsonwebtoken");
require('dotenv').config();

const auth = async (req , res ,next) => {
    const token = req.header('auth-token');  
    if(token){
        try {
            const tok = jwt.verify(token , process.env.passwordSecret);            
            req.token = token;
            
        } catch (error) {
            res.status(401).send({errors :  'Invalid Token'})
        }
        
    }  else {
        res.status(400).send({ errors : 'Invalid Details'})
    }
    next()
}

module.exports = auth;