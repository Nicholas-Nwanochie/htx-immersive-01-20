
//promise library
const promise = require('bluebird');

let initOptions = {
    promiseLib: promise
}

//testdbJan20
let config = {
    host: 'localhost',
    port: 5432,
    database: 'testdbJan20',
    user: 'postgres'
}

//load and init pg-promise

let pgp = require('pg-promise')(initOptions);
let db = pgp(config);

// console.log(db);

// db.query("SELECT * FROM dishes WHERE title='soup'")
//     .then((results) => {

//         console.log(results);
//     })

// db.none("INSERT INTO pgpromise VALUES (DEFAULT, 'Kazim', 'Chicago' );")
//     .then(() => {

//         console.log('record was inserted');
//     })

// {}
// db.query("SELECT * FROM pgpromise")
//     .then((results) => {

//         results.forEach((person) => {
//             console.log(`Good Morning ${person.name}`);
//         })
//         // console.log(results);
//     })

let firstName = 'Foorkan';
let city = 'Chicago';

db.result("INSERT INTO pgpromise VALUES (DEFAULT, $1, $2)", [firstName, city])
    .then((result) => {

        console.log('record was inserted');
    })


