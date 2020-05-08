function Keygen(email, name , bits , pass) {
    const fs = require('fs');
    const openpgp = require('openpgp');
    var javascriptUserId = {
        name: name,
        email: email,
}
    var javascriptPassphrase = pass;
    var javascriptNumBits = bits;
    // Generate some keys!
    openpgp.generateKey({
        userIds: javascriptUserId,
        numBits: javascriptNumBits,
        passphrase: javascriptPassphrase
    }).then(keyPair => {
        /* console.info(keyPair.publicKeyArmored); */
        /* console.info(keyPair.privateKeyArmored);*/
        let pkey = (keyPair.publicKeyArmored);
        let skey = (keyPair.privateKeyArmored);
        fs.writeFile('pkey.txt', pkey, (err) => {
            if (err) throw err;
        });
        fs.writeFile('skey.txt', skey, (err) => {
            if (err) throw err;
        });
    });
}
module.exports.Keygen = Keygen;