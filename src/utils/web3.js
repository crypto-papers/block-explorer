import Web3 from 'web3';
import RocketPool from 'rocketpool';

import RocketStorage from '../contracts/abi/RocketStorage.json';

export const provider = new Web3(
  new Web3.providers.HttpProvider('http://gateway.rocketpool.net:8888')
);

export const rp = new RocketPool(provider, RocketStorage);
