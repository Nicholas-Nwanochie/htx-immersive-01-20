const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
let db = require('./models');
let sessions = require('express-session');
let cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(cookieParser());

app.use(sessions(
  {
    secret: 'slkdjfa;lj;lakjsd;lfkj',
    cookie: { secure: false, maxAge: 14 * 24 * 60 * 60 * 1000 }

  }
));

app.use(require('./routes/'));
app.use(require('./routes/blogs.js'));
app.use(require('./routes/editblogs.js'));

app.use(bodyParser.urlencoded({ extended: false }));

let auth = (req, res, next) => {

  //if there session then allow user to see page
  //otherwise redirect user to /login

  if (req.session.userid) {
    next();
  }
  else {
    res.redirect('/login');
  }

}

//node receiveds request =>  middleware =>request, response
app.get('/login', (req, res) => {

  res.render('login')
})

app.post('/login', (req, res) => {

  let username = req.body.username;

  let password = req.body.password;

  db.users.findAll({ where: { username: username } })
    .then(results => {
      //[{usrname: value, email: value, password},{}, {}]

      //authenticated
      if (results.length > 0) {
        //user has been found,

        //test the pasword

        bcrypt.compare(password, results[0].password, (err, response) => {

          console.log(results[0].password);
          console.log(password);

          if (response) {
            req.session.userid = username;
            res.redirect('/');
          }
          else {
            res.redirect('/error')
          }
        })
      }
      else {
        res.redirect('/registration')
      }
    })

  // res.send('post login')
})


app.get('/logout', (req, res) => {

  req.session.destroy((err) => {
    res.redirect('/')
  })

})

app.get('/registration', (req, res) => {

  let error = req.query.error;
  let err = "hidden";

  if (error) {
    err = "visible"
  }
  //encrypt the password
  //add information to database 

  res.render('registration', {
    error: err
  })
})


app.get('/protected', auth, (req, res) => {

  res.send('protected')
});

app.all('/admin/*', auth, (req, res, next) => {
  next();
})


app.get('/admin/dashboard', (req, res) => {

  res.send('admin dashboard')
})

app.get('/admin/user', (req, res) => {

  res.send('admin user')
})

app.get('/admin/timesheet', (req, res) => {
  res.send('admin timecard')
})


app.post('/registration', (req, res) => {

  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;


  // test to make sure no duplicate username

  // db.users.findAll({where: {username: username}})
  // then(results =>{
  //   if (results.length == 0){
  //     //no other user in database
  //   }
  //   else {
  //     //duplicates redicred
  //   }
  // })
  // // console.log(req.body);

  let passwordEncrypted = bcrypt.hashSync(password, 8);

  db.users.create({
    username: username,
    email: email,
    password: passwordEncrypted
  })
    .then((user) => {

      // res.send('post registration');

      res.redirect('/login')
    })
    .catch(error => {
      // res.send('error duplicate entry');
      res.redirect('/registration?error=visible')
    })
  // console.log(passwordEncrypted);

})

app.get('/error', (req, res) => {

  res.send('error')
})


app.listen(3000, () => {
  console.log('Listening on 3000');
});
