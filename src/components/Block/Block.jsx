import React, { Fragment, useEffect, useState } from 'react';
import { string } from 'prop-types';

import SearchBar from '../SearchBar/SearchBar';
import provider from '../../utils/web3';

import '../../style/globals.scss';

const Block = ({ blockNum }) => {
  const [block, setBlock] = useState(blockNum);
  const [blockData, setBlockData] = useState({});

  const getBlockInfo = async b => {
    await provider.eth.getBlock(b, true).then(setBlockData);
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
        <h3 className="container-title">{`Block #${blockData.number || ''}`}</h3>
        {blockData && (
          <div>
            <p>{`Timestamp: ${blockData.timestamp}`}</p>
            <p>{`Block Hash: ${blockData.hash}`}</p>
            <p>{`Block Size: ${blockData.size}`}</p>
            <p>{`Gas Limit: ${blockData.gasLimit}`}</p>
            <p>{`Gas Used: ${blockData.gasUsed}`}</p>
            <p>{`Difficulty: ${blockData.difficulty}`}</p>
            <p>{`Total Difficulty: ${blockData.totalDifficulty}`}</p>
            <p>{`Nonce: ${blockData.nonce}`}</p>
            <p>{`Parent Hash: ${blockData.parentHash}`}</p>
            <p>{`SHA3 Uncles: ${blockData.sha3Uncles}`}</p>
            <p>{`State Root: ${blockData.stateRoot}`}</p>
            <p>{`Transactions Root: ${blockData.transactionsRoot}`}</p>
            <p>{`Block Miner: ${blockData.miner}`}</p>
            <p>{`Extra Data: ${blockData.extraData}`}</p>
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
