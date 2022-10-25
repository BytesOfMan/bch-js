/*
  This is the primary library file for bch-js. This file combines all the other
  libraries in order to create the BCHJS class.
*/

// local deps
const BitcoinCash = require('./bitcoincash')
const Crypto = require('./crypto')
const Mnemonic = require('./mnemonic')
const Address = require('./address')
const HDNode = require('./hdnode')
const TransactionBuilder = require('./transaction-builder')
const ECPair = require('./ecpair')
const Script = require('./script')
const Schnorr = require('./schnorr')
const SLP = require('./slp/slp')
const Ecash = require('./ecash')

class BCHJS {
  constructor () {
    // Populate utility functions
    this.Address = new Address()
    this.BitcoinCash = new BitcoinCash(this.Address)
    this.Crypto = Crypto
    this.ECPair = ECPair
    this.ECPair.setAddress(this.Address)
    this.HDNode = new HDNode(this.Address)
    this.Mnemonic = new Mnemonic(this.Address)
    this.Script = new Script()
    this.TransactionBuilder = TransactionBuilder
    this.TransactionBuilder.setAddress(this.Address)
    this.Schnorr = new Schnorr()
    this.SLP = new SLP()
    this.SLP.HDNode = this.HDNode
    this.eCash = new Ecash()
  }
}

module.exports = BCHJS
