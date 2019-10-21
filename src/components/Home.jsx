import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('http://gateway.rocketpool.net:8888'));

const Home = () => {
  const [blockIds, setBlockIds] = useState([]);
  const [blockHashes, setBlockHashes] = useState([]);
  const [currBlock, setCurrBlock] = useState(null);

  useEffect(() => {
    const getBlockNo = async () => {
      const currBlockNo = await web3.eth.getBlockNumber().then(setCurrBlock);

      return currBlockNo;
    };

    getBlockNo();
  });

  return <h2>The current block is: {currBlock}</h2>;
};

Home.displayName = 'Home';

export default Home;
