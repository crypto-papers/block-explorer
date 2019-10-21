import React from 'react';
import { string } from 'prop-types';

import { weiToEth } from '../utils/conversions';

import '../style/accountBalances.scss';

const AccountBalances = ({ eth, reth, rpl }) => (
  <div className="balances">
    <h3 className="balances-title">Account Balances:</h3>
    <p>{`${weiToEth(Number(eth))} ETH`}</p>
    <p>{`${weiToEth(Number(reth))} rETH`}</p>
    <p>{`${weiToEth(Number(rpl))} RPL`}</p>
  </div>
);

AccountBalances.displayName = 'AccountBalances';

AccountBalances.propTypes = {
  eth: string,
  reth: string,
  rpl: string,
};

export default AccountBalances;
