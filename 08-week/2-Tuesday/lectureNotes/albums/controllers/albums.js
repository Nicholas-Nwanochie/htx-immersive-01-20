const express = require('express');
const router = express.Router();

let data = require('../data/data.json');

//data {}
// data.Sublime

router.get('/albums', (req, res) => {
  

    
    res.render('albums')
})

router.get('/albums/:id', (req, res) => {
  
    let id = req.param('id')
    console.log(data.Sublime[id]);
    
    res.render('albums', {
        album: data.Sublime[id]
    })
})

module.exports = router;