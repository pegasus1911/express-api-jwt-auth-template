// controllers/test-jwt.js

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// controllers/test-jwt.js
router.get('/sign-token', (req, res) => {
  // Mock user object added
  const user = {
    _id: 1,
    username: 'test',
    password: 'test',
  };
  const token =jwt.sign({user},process.env.JWT_SECRET)
  res.json({token})
});
// controllers/test-jwt.js
router.post('/verify-token', (req, res) => {
    try{

        const token = req.headers.authorization.split(' ')[1];
        const decode=jwt.verify(token,process.env.JWT_SECRET)
        console.log({decode})
        res.json({ decode });
    }catch(err){
        res.status(401).json({err:'invalid token'})
    }
});

module.exports = router;
