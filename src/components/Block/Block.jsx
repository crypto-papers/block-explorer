import React, { Fragment, useEffect, useState } from 'react';
import { string } from 'prop-types';

import SearchBar from '../SearchBar/SearchBar';
import { provider } from '../../utils/web3';

import '../../style/globals.scss';
import './Block.scss';

const Block = ({ blockNum }) => {
  const [block, setBlock] = useState(blockNum);
  const [blockData, setBlockData] = useState('');
  const [latest, setLatest] = useState(false);

  const getBlockInfo = async b => {
    await provider.eth.getBlock(b, true).then(setBlockData);
    const currentBlock = await provider.eth.getBlockNumber();

    if (b === currentBlock || b === 'latest') {
      setLatest(true);
    } else {
      setLatest(false);
    }
  };

  useEffect(() => {
    getBlockInfo(blockNum);
  }, []);

  return (
    <Fragment>
      <SearchBar
        changeHandler={setBlock}
        clickHandler={{ cb: getBlockInfo, params: [block] }}
        label="Search by Block:"
      />
      <div className="container">
        <h3 className="container-title">
          {`Block #${blockData.number || ''}${latest ? ' - latest' : ''}`}
        </h3>
        {blockData && (
          <div className="grid">
            <p className="grid-row">
              <strong>Timestamp: </strong> {blockData.timestamp}
            </p>
            <p className="grid-row">
              <strong>Block Hash: </strong> {blockData.hash}
            </p>
            <p className="grid-row">
              <strong>Block Size: </strong> {blockData.size}
            </p>
            <p className="grid-row">
              <strong>Gas Limit: </strong> {blockData.gasLimit}
            </p>
            <p className="grid-row">
              <strong>Gas Used: </strong> {blockData.gasUsed}
            </p>
            <p className="grid-row">
              <strong>Difficulty: </strong> {blockData.difficulty}
            </p>
            <p className="grid-row">
              <strong>Total Difficulty: </strong> {blockData.totalDifficulty}
            </p>
            <p className="grid-row">
              <strong>Nonce: </strong> {blockData.nonce}
            </p>
            <p className="grid-row">
              <strong>Parent Hash: </strong> {blockData.parentHash}
            </p>
            <p className="grid-row">
              <strong>SHA3 Uncles: </strong> {blockData.sha3Uncles}
            </p>
            <p className="grid-row">
              <strong>State Root: </strong> {blockData.stateRoot}
            </p>
            <p className="grid-row">
              <strong>Transactions Root: </strong> {blockData.transactionsRoot}
            </p>
            <p className="grid-row">
              <strong>Block Miner: </strong> {blockData.miner}
            </p>
            {/* <p className="grid-row"><strong>Extra Data: </strong> {blockData.extraData}</p> */}
            {blockData.transactions &&
              blockData.transactions.length > 0 &&
              blockData.transactions.forEach(t => <p>{t}</p>)}
          </div>
        )}
      </div>
    </Fragment>
  );
};

Block.displayName = 'Block';

Block.propTypes = {
  blockNum: string,
};

Block.defaultProps = {
  blockNum: 'latest',
};

export default Block;
