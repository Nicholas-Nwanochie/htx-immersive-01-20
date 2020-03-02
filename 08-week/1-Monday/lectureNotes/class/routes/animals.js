
const express = require('express');
const router = express.Router();


router.get('/animals', (req, res) => {
  
    res.send('animals page')
})

module.exports = router;