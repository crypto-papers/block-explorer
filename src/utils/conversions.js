import web3 from 'web3';

const weiToEth = amount => web3.utils.fromWei(amount, 'ether');

export default weiToEth;
