import React, { Fragment, useState } from 'react';

import AccountBalances from '../AccountBalances/AccountBalances';
import SearchBar from '../SearchBar/SearchBar';
import { RethToken, RplToken } from '../../utils/addresses';
import provider from '../../utils/web3';

import '../../style/globals.scss';

const Address = () => {
  const [address, setAddress] = useState(null);
  const [ethBalance, setEthBalance] = useState(null);
  const [rethBalance, setRethBalance] = useState(null);
  const [rplBalance, setRplBalance] = useState(null);
  const [showBalances, setShowBalances] = useState(null);

  const getAddressInfo = async add => {
    await provider.eth.getBalance(add).then(setEthBalance);

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
        label="Search by Address:"
      />
      {showBalances && <AccountBalances eth={ethBalance} reth={rethBalance} rpl={rplBalance} />}
    </Fragment>
  );
};

Address.displayName = 'Address';

export default Address;
