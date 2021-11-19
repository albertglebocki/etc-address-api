var express = require('express');
var Wallet = require('./wallet');
var app = express();

app.get('/', function(req, res){

    var newWallet = Wallet.generate();
    var newPublicKey = newWallet.getPublicKeyString();
    var newPrivateKey = newWallet.getPrivateKeyString();
    var newAddress = newWallet.getAddressString();

    var response = {
        'address' : newAddress, 
        'publickey' : newPublicKey, 
        'privatekey' : newPrivateKey
    };

    res.send(response);
});

app.listen(process.env.PORT || 3000);