const Artifactor = require('@truffle/artifactor');

const ABI = require('./abi/abi');

const artifactor = new Artifactor(`${__dirname  }/abi/`);

const contractData = {
  abi: ABI.abi,
  contractName: 'RocketStorage',
  networks: {
    '77': {
      address: '0x2CaBe1D447092CB2A0740c30F43c68624B2cbaD4',
      events: {},
      links: {},
      transactionHash: '0x4f1a4116e4dee797e95fa31fa606e2fbbe73e01fa8a68765dc85ab68def38f1f',
    },
  },
};

artifactor.save(contractData);
