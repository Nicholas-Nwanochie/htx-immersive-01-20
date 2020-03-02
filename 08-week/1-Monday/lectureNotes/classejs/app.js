
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(require('./controllers/index'));
app.use(require('./controllers/aboutus'));
app.use(require('./controllers/schools'))
app.use(require('./controllers/cars'));


app.listen(3000, (params) => {
  
    console.log('listening on port 3000');
})