import React from 'react';
import { string } from 'prop-types';

import '../../style/globals.scss';

const Block = ({ blockNum }) => {
  return (
    <div className="container">
      <h3 className="container-title">{`Block #${blockNum}`}</h3>
    </div>
  );
};

Block.displayName = 'Block';

Block.propTypes = {
  blockNum: string,
};

Block.defaultProps = {
  blockNum: '0',
};

export default Block;
