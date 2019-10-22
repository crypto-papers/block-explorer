import React from 'react';
import { string } from 'prop-types';

import fromWei from '../../utils/conversions';

const AccountBalances = ({ eth, reth, rpl }) => (
  <div className="container">
    <h3 className="container-title">Account Balances:</h3>
    <p>{`${fromWei(eth, 'ether')} ETH`}</p>
    <p>{`${fromWei(reth, 'ether')} rETH`}</p>
    <p>{`${fromWei(rpl, 'ether')} RPL`}</p>
  </div>
);

AccountBalances.displayName = 'AccountBalances';

AccountBalances.propTypes = {
  eth: string,
  reth: string,
  rpl: string,
};

export default AccountBalances;
