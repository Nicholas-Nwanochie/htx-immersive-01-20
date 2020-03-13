
const db = require('./models');

// db.blog.create({
//     title: 'hello world2',
//     body: 'lorem ipsum',
//     authorID: 1,
//     categoriesID: 2
// })
//     .then((blog) => {
//         console.log('blog created: ', blog.id);
//     })
// db.blog.create({
//     title: 'hello world3',
//     body: 'lorem ipsum',
//     authorID: 1,
//     categoriesID: 2
// })
//     .then((blog) => {
//         console.log('blog created: ', blog.id);
//     })
// db.blog.create({
//     title: 'hello world4',
//     body: 'lorem ipsum',
//     authorID: 1,
//     categoriesID: 2
// })
//     .then((blog) => {
//         console.log('blog created: ', blog.id);
//     })
// db.blog.create({
//     title: 'hello world5',
//     body: 'lorem ipsum',
//     authorID: 1,
//     categoriesID: 2
// })
//     .then((blog) => {
//         console.log('blog created: ', blog.id);
//     })

db.blog.findAll({ include: [{ model: db.author }, { model: db.categories }] })
    .then(results => {

        console.log(results[0].title, results[0].author.name, results[0].category.name);
    })
