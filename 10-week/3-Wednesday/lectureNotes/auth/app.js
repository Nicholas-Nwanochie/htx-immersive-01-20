const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let db = require('./models');
const bcrypt = require('bcryptjs');
let sessions = require('express-session');
let cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cookieParser());

app.use(sessions({

  secret: 'lskdfsljdfs;lkdjf;slkd',
  cookie: { secure: false, maxAge: 14 * 24 * 60 * 60 * 1000 }
}))

let auth = (req, res, next) => {

  if (req.session.userid) {
    next();
  }
  else {
    res.redirect('/login')
  }
}


app.use(require('./routes/'));
app.use(require('./routes/blogs.js'));
app.use(require('./routes/editblogs.js'));


app.get('/logout', (req, res) => {

  req.session.destroy(err => {
    res.redirect('/')
  })
})

app.all('/admin/*', auth, (req, res, next) => {
  next();
})
// create login form, registration form
// create database
// create record ourtable for the user 

app.get('/login', (req, res) => {

  res.render('login')
});

app.post('/login', (req, res) => {

  let user = req.body.username;
  let password = req.body.password;

  //find user in database 
  //make sure password is valid 
  //set session = userID

  db.users.findAll({ where: { username: user } })
    .then((results) => {
      //results array of objects [{}, {}]
      //each object is a record in the dataase

      if (results.length > 0) {
        //test if passwords
        // a match was found

        //bcrypt.compare(whatUserEntered, datbaseEntry, callbackfunction)

        bcrypt.compare(password, results[0].password, (err, response) => {
          //response = match, error = no match
          if (response) {
            //set session variable 

            req.session.userid = user;
            res.redirect('/');
          }
          else {
            res.redirect('/error');
          }
        })


      }
      else {
        //no user was found 

        res.redirect('/error')
      }

    })

})

app.get('/error', (req, res) => {

  res.send('error')
})

//middleware server receives request => middleware =>route to appropriate handler 

app.get('/admin/dashboard', (req, res) => {

  res.send('protected admin dashboard')
})


app.get('/registration', (req, res) => {

  res.render('registration')
})

app.post('/registration', (req, res) => {

  let user = req.body.username;
  let email = req.body.email;
  let password = bcrypt.hashSync(req.body.password, 8);

  // bcrypt.hashSync(password, 8)
  //store this data inside of a table 


  db.users.create({ username: user, email: email, password: password })
    .then(user => {

      console.log(user);
      res.redirect('/login')
    })
    .catch(error => {
      console.log(error);
    })

})

app.listen(3000, () => {
  console.log('Listening on 3000');
});
