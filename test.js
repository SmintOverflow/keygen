const fs = require('fs')
let openpgpKeygen = require("openpgp-keygen")
console.log("Reading Public Key")
keygen.Keygen()
setTimeout(() => {
    fs.readFile('./pkey.txt', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(data)
    })
}, 5000);

setTimeout(() => {
    console.log("Reading Private Key")
}, 7000);
setTimeout(() => {
    fs.readFile('./skey.txt', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(data)
    })
}, 12000);
