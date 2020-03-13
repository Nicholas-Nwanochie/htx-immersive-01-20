const express = require('express');
const router = express.Router();

let db = require('../models');

router.get('/', (req, res) => {

  db.blog.findAll()
    .then(results => {

      res.render('index.ejs', {
        blogs: results
      });
    })

});

module.exports = router;
