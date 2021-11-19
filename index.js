'use strict';
var express = require('express');
var app = express();
var Wallet = require('./wallet');

app.get('/', function(req, res){

    var newWallet = Wallet.generate();
    var newPublicKey = newWallet.getPublicKeyString();
    var newPrivateKey = newWallet.getPrivateKeyString();
    var newAddress = newWallet.getAddressString();

    var data = {
        'address' : newAddress, 
        'publickey' : newPublicKey, 
        'privatekey' : newPrivateKey
    };

    var response = JSON.stringify(data, null, '\n');

    res.send(response);
});

app.listen(80);