import web3 from 'web3';

const fromWei = (amount, toUnit) => {
  const converted = amount && typeof amount === 'string' ? web3.utils.fromWei(amount, toUnit) : 0;

  return converted;
};

export default fromWei;
