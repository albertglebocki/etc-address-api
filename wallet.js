'use strict';
var crypto = require('crypto');
var ethUtils = require('ethereumjs-util');

var Wallet = function(pk) {
	this.privateKey = pk.length == 32 ? pk : Buffer(pk, 'hex');
};

Wallet.generate = function() {
    return new Wallet(crypto.randomBytes(32));
};

Wallet.prototype.getPrivateKey = function() {
	return this.privateKey;
};

Wallet.prototype.getPrivateKeyString = function() {
	return this.getPrivateKey().toString('hex');
};

Wallet.prototype.getPublicKey = function() {
	return ethUtils.privateToPublic(this.privateKey);
};

Wallet.prototype.getPublicKeyString = function() {
	return '0x' + this.getPublicKey().toString('hex');
};

Wallet.prototype.getAddress = function() {
	return ethUtils.privateToAddress(this.privateKey);
};

Wallet.prototype.getAddressString = function() {
	return '0x' + this.getAddress().toString('hex');
};

Wallet.prototype.getChecksumAddressString = function() {
	return ethUtils.toChecksumAddress(this.getAddressString());
};

Wallet.fromPrivateKey = function(pk) {
	return new Wallet(pk);
};

module.exports = Wallet;