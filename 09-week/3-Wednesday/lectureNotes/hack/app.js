const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const promise = require('bluebird');

const initOptions = {
  promiseLib: promise
}

const config = {
  host: 'localhost',
  port: 5432,
  database: 'hack',
  user: 'postgres'
}

const pgp = require('pg-promise')(initOptions);

const db = pgp(config);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/", (req, res) => {

  db.result(`INSERT INTO restaurant VALUES (DEFAULT, '${req.name}'' )`);
  //drop table 
  res.send(`name: ${req.body.name}`);
});

app.get('/search', (req, res) => {

  res.render('search')
})

db.query(`SELECT * FROM test WHERE name = 'Veronica'`)
  .then(function (results) {
    results.forEach(function (r) {
      console.log(r.id, r.name);
    })
  })

// Veronica'; SELECT * FROM customer; --
app.post('/search', (req, res) => {

  db.query(`SELECT * FROM test WHERE name = '${req.body.name}'`)
    .then(function (results) {
      results.forEach(function (r) {
        console.log(r.id, r.name);
      })
      console.log('I am here');
      console.log(results);
      res.json(results);

    })
})


// app.post('/search', (req, res) => {

//   db.query(`SELECT * FROM test WHERE name = $1`, [req.body.name])
//     .then(function (results) {
//       results.forEach(function (r) {
//         console.log(r.id, r.name);
//       })
//       console.log('I am here');
//       console.log(results);
//       res.json(results);

//     })
// })



server = app.listen(3000, () => {
  console.log("listening on port 3000");

  // setTimeout(() => {
  //   console.log('closing...');
  //   server.close();
  // }, 1000)
});


server.on('close', () => {

  console.log('closed appliation and disconned from databasse.  Goodbye');

  pgp.end();



})
