

let db = require('./models');


// db.user.findByPk(3)
//     .then(user => {

//         user.firstName = "Mery";

//         user.save()
//             .then(() => {
//                 console.log('record saved');
//             })
// })

// let sequelize = db.sequelize;

// sequelize.query('SELECT * FROM users', { type: sequelize.QueryTypes.SELECT })
//     .then(results => {
//         results.forEach(record => {
//             console.log(record.firstName);
//         })
//     })

// db.user.destroy({ where: { id: 1 } })
//     .then(rowDeleted => {
//         console.log(rowDeleted);

//         if (rowDeleted == 1) {
//             console.log('deleted successfully');
//         }
//     })

// db.user.findAll({ where: { firstName: 'Alina' } })
//     .then(results => {

//         results.forEach(person => {
//             console.log(person.firstName, person.lastName, person.email);
//         })
//     })

// db.user.findByPk(3)
//     .then(record => {
//         console.log(record.id, record.firstName, record.lastName, record.email);
//     })

// db.user.findAll()
//     .then((results) => {

//         // console.log(results);

//         results.forEach(record => {
//             console.log(`${record.firstName} ${record.lastName} ${record.email}`);
//         })
//     });




// db.user.create({
//     firstName: 'Austin',
//     lastName: 'Denny',
//     email: 'austin@me.com'
// })
// db.user.create({
//     firstName: 'Jaye',
//     lastName: 'Jensen',
//     email: 'jaye@me.com'
// })
// db.user.create({
//     firstName: 'Alina',
//     lastName: 'Belova',
//     email: 'alina@me.com'
// })
// db.user.create({
//     firstName: 'Meryem',
//     lastName: 'Komur',
//     email: 'meryem@me.com'
// })
// db.user.create({
//     firstName: 'Diego',
//     lastName: 'Rivera',
//     email: 'diego@me.com'
// })



