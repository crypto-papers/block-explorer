import React, { Fragment, useState } from 'react';
import Web3 from 'web3';

import AccountBalances from '../AccountBalances/AccountBalances';
import SearchBar from '../SearchBar/SearchBar';
import { RethToken, RplToken } from '../../utils/addresses';

import '../../style/globals.scss';

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
    <Fragment>
      <SearchBar
        changeHandler={setAddress}
        clickHandler={{ cb: getAddressInfo, params: [address] }}
        label="Search for Address:"
      />
      {showBalances && <AccountBalances eth={ethBalance} reth={rethBalance} rpl={rplBalance} />}
    </Fragment>
  );
};

Address.displayName = 'Address';

export default Address;
