const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(require('./routes/'));
app.use(require('./routes/blogs.js'));
app.use(require('./routes/editblogs.js'));

app.use(bodyParser.urlencoded({ extended: false }));


//node receiveds request =>  middleware =>request, response
app.get('/login', (req, res) => {

  res.render('login')
})

app.post('/login', (req, res) => {

  res.send('post login')
})

app.get('/registration', (req, res) => {

  //encrypt the password
  //add information to database 

  res.render('registration')
})


app.post('/registration', (req, res) => {

  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

  // console.log(req.body);

  let passwordEncrypted = bcrypt.hashSync(password, 8);

  console.log(passwordEncrypted);

  res.send('post registration')
})

app.listen(3000, () => {
  console.log('Listening on 3000');
});
