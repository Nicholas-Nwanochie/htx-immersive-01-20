
const db = require('./models');


db.blogs.findAll({ include: [{ model: db.author }] })
    .then(results => {

        results.forEach(record => {

            console.log(record.title, record.author.name);
        })

    })




// // db.categories.findAll()
// //     .then(results => {

// //         results.forEach(record => {
// //             console.log(record.name);
// //         })

// //     })

// db.blogs.create({
//     title: 'Javascript functions',
//     body: 'executing javascript functions',
//     categoryID: 1,
//     authorID: 1
// })
//     .then(blog => {

//         console.log(blog.id);
//     })
// db.blogs.create({
//     title: 'goolge apis',
//     body: 'maps with google apis',
//     categoryID: 1,
//     authorID: 1
// })
//     .then(blog => {

//         console.log(blog.id);
//     })
// db.blogs.create({
//     title: 'styling with bootstrap',
//     body: 'styling with bootstrap',
//     categoryID: 1,
//     authorID: 1
// })
//     .then(blog => {

//         console.log(blog.id);
//     })
// db.blogs.create({
//     title: 'flexbox vs bootstrap vs css grid',
//     body: 'which one do you love',
//     categoryID: 1,
//     authorID: 1
// })
//     .then(blog => {

//         console.log(blog.id);
//     })
// db.blogs.create({
//     title: 'travelling while coding in a pandemic',
//     body: 'I now have nightmares about coding',
//     categoryID: 1,
//     authorID: 1
// })
//     .then(blog => {

//         console.log(blog.id);
//     })
// db.blogs.create({
//     title: 'Node callbacks',
//     body: 'Callbacks are the workhorse of Node',
//     categoryID: 1,
//     authorID: 1
// })
//     .then(blog => {

//         console.log(blog.id);
//     })

