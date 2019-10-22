import React, { Fragment, useEffect, useState } from 'react';
import Web3 from 'web3';

import BlockGrid from '../BlockGrid/BlockGrid';

import '../../style/globals.scss';

const Home = () => {
  // Const [blockIds, setBlockIds] = useState([]);
  // const [blockHashes, setBlockHashes] = useState([]);
  const [currBlock, setCurrBlock] = useState(null);

  const web3 = new Web3(new Web3.providers.HttpProvider('http://gateway.rocketpool.net:8888'));

  useEffect(() => {
    const getBlockNo = async () => {
      await web3.eth.getBlockNumber().then(setCurrBlock);
    };

    getBlockNo();
  });

  return (
    <Fragment>
      <h2>The current block is: {currBlock}</h2>
      <BlockGrid />
    </Fragment>
  );
};

Home.displayName = 'Home';

export default Home;
