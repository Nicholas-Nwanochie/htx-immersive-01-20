
const express = require('express');
const router = express.Router();


router.get('/cars/:cars', (req, res) => {
  
    let cars = req.param('cars');

    res.send(`${cars} is type of car`)
})

module.exports = router;