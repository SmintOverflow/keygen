var fs = require('fs')
var keygen = require('./keygen.js')
console.log("Reading Public Key")
keygen.Keygen('user@domain.com', 'user', '1024', 'password');
setTimeout(() => {
    fs.readFile('./pkey.txt', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}, 5000);

setTimeout(() => {
    console.log("Reading Private Key");
}, 7000);
setTimeout(() => {
    fs.readFile('./skey.txt', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}, 12000);
