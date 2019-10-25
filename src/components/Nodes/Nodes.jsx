import React, { Fragment, useEffect, useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import { rp } from '../../utils/web3';

const Nodes = () => {
  const [oneDayRPL, setOneDayRPL] = useState('');
  const [contractData, setContractData] = useState(null);
  const [contract, setContract] = useState({});
  const [totalPools, setTotalPools] = useState('');
  const [ethAssigned, setEthAssigned] = useState('');

  const getNodes = async () => {
    // Await rp.node.getAvailableCount('16000000000000000000', '2').then(setOneDayRPL);

    // Const test = await rp.contract.methods.getStakingDurationID().call();

    // console.log(test);
    //

    await rp.pool.getPoolCount().then(setTotalPools);
    await rp.pool.getTotalEthAssigned('1day').then(setEthAssigned);
  };

  const getNodeDetails = async c => {
    const nodeContract = await rp.node.getContract(c);

    nodeContract.getDetails().then(setContractData);

    console.log(contractData);
  };

  useEffect(() => {
    getNodes();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <h3 className="container-title">Nodes Overview</h3>
        <p>{`Total Minipools: ${totalPools}`}</p>
        <p>{ethAssigned}</p>
      </div>
      <SearchBar
        changeHandler={setContract}
        clickHandler={{ cb: getNodeDetails, params: [contract] }}
        label="Search by Smart Node Address:"
      />
      {contractData && (
        <div className="container">
          <h3 className="container-title">Node Details</h3>
          <p>{`Owner: ${contractData.owner}`}</p>
          <p>{`ETH Balance: ${contractData.ethBalance}`}</p>
          <p>{`RPL Balance: ${contractData.rplBalance}`}</p>
        </div>
      )}
    </Fragment>
  );
};

Nodes.displayName = 'Nodes';

export default Nodes;
