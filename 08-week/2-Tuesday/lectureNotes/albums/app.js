
const express = require('express');
const app = express();

app.set('view engine', "ejs");

app.use(express.static('public'));


app.use(require('./controllers/index'));
app.use(require('./controllers/albums'))

app.listen(3001, () => {
  console.log("listening on port 3001")
})