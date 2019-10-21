import React, { useState } from 'react';
import Web3 from 'web3';

import AccountBalances from './AccountBalances';
import { RethToken, RplToken } from '../utils/addresses';

const Address = () => {
  const [address, setAddress] = useState(null);
  const [ethBalance, setEthBalance] = useState(null);
  const [rethBalance, setRethBalance] = useState(null);
  const [rplBalance, setRplBalance] = useState(null);
  const [showBalances, setShowBalances] = useState(null);

  const web3 = new Web3(new Web3.providers.HttpProvider('http://gateway.rocketpool.net:8888'));

  const getAddressInfo = async add => {
    await web3.eth.getBalance(add).then(setEthBalance);

    await RethToken.methods
      .balanceOf(add)
      .call()
      .then(setRethBalance);

    await RplToken.methods
      .balanceOf(add)
      .call()
      .then(setRplBalance);

    setShowBalances(true);
  };

  return (
    <div>
      <label htmlFor="address-search">
        Search for Address:
        <input id="address-search" type="text" onChange={e => setAddress(e.target.value)} />
      </label>
      <button type="submit" onClick={() => getAddressInfo(address)}>
        Search
      </button>
      {showBalances && <AccountBalances eth={ethBalance} reth={rethBalance} rpl={rplBalance} />}
    </div>
  );
};

Address.displayName = 'Address';

export default Address;
