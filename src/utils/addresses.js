import Web3 from 'web3';

import ABI from './abi';

const web3 = new Web3(new Web3.providers.HttpProvider('http://gateway.rocketpool.net:8888'));

// ERC-20 contract addresses
const RPL = '0xb827590f349285d26163cff7456f5d42442675a0';
const RETH = '0x41F9C8761Fef8a821282F1908eeC70Ba8cDFfAA1';

export const RplToken = new web3.eth.Contract(ABI, RPL);
export const RethToken = new web3.eth.Contract(ABI, RETH);
