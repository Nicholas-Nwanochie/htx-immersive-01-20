
const express = require('express');
const router = express.Router();


let data = require('../data/data.json');

// data = {spakers : []}
// data.speaker [{},{},{}]

let photoList = [];

router.get('/', (req, res) => {
  
    console.log(data);

    data.Sublime.forEach((albums)=>{

        photoList.push(albums.coverArt)

    })

    console.log(photoList);
    res.render('index', {
        photos: photoList
    })
})



module.exports = router;