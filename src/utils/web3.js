import Web3 from 'web3';

const provider = new Web3(new Web3.providers.HttpProvider('http://gateway.rocketpool.net:8888'));

export default provider;
