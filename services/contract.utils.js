require('dotenv').config()
const ethers = require('ethers')

const SimplifiedERC721ABI = require('../constants/simplifiederc721abi')
let rpcapi = process.env.MAINNET_RPC

let provider = new ethers.providers.JsonRpcProvider(rpcapi, 250)

const loadContractFromAddress = (address) => {
  let abi = SimplifiedERC721ABI

  let contract = new ethers.Contract(address, abi, provider)
  return contract
}

const getTokenInfo = async (address, tkID) => {
  let minter = contractutils.loadContractFromAddress(address)
  if (!minter) return null
  let uri = await minter.tokenURI(tkID)
  return uri
}

const contractutils = {
  loadContractFromAddress,
  getTokenInfo,
}

module.exports = contractutils