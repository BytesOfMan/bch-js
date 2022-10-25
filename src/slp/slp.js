/*
  This is the parent library for the SLP class. It was originally forked from slp-sdk.

  TODO: Create an SLP fee calculator like slpjs:
  https://github.com/simpleledger/slpjs/blob/master/lib/slp.ts#L921
*/

// imports
// require deps
// const BCHJS = require("../bch-js")
const Address = require('./address')
const ECPair = require('./ecpair')
// const HDNode = require("./hdnode")
const TokenType1 = require('./tokentype1')
const NFT1 = require('./nft1')

// SLP is a superset of BITBOX
class SLP {
  constructor () {
    this.Address = new Address()
    this.ECPair = ECPair
    this.TokenType1 = new TokenType1()
    this.NFT1 = new NFT1()
  }
}

module.exports = SLP
