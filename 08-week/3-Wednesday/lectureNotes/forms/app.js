
const express = require('express');
const app = express();


//public

app.use(express.static('public'));

//views

app.set('view engine', 'ejs');


//routes

app.use(require('./controllers/index'))

app.listen(3025, () => {
  console.log('listening on port 3025')
})