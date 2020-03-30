
const pbkdf2 = require('pbkdf2');
const crypto = require('crypto');

let password = "some password";

let salt = crypto.randomBytes(20).toString('hex');
// console.log(salt);

let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256');


let hash = key.toString('hex');

// console.log(hash);

//this will be stored in database

let stored_password = `pbkdf2_sha256$3600$${salt}$${hash}`;

// console.log(stored_password);

//1. validating user password

//checking a password 
////////////////////////////////////////////////////////////////

let login = "some password";

let password_parts = stored_password.split('$');

// ['some password', '3600', 'salt', 'hash'];


// console.log(password_parts[2]);
// console.log(password_parts[1]);
let keyNewLogin = pbkdf2.pbkdf2Sync(
    login,
    password_parts[2],
    parseInt(password_parts[1]),
    256,
    'sha256'
)

// console.log(password_parts[3]);
let hashNewLogin = keyNewLogin.toString('hex');

if (hashNewLogin == password_parts[3]) {
    console.log('passwords matched');
}
else {
    console.log('you suck, try again.');
}






