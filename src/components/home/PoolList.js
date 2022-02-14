import React from 'react';
import styled from 'styled-components';
import { getIsShowFilteredArr } from '../../lib/util';
import PoolListItem from './PoolListItem';

const PoolListBlock = styled.div`
  padding-right: 1rem;
  width: 52%;
  max-height: 752px;
  overflow-y: scroll;
`;

const PoolList = ({ swimpool, ...rest }) => {
  return (
    <PoolListBlock>
      <ul>
        <PoolListItem swimpool={getIsShowFilteredArr(swimpool)} {...rest} />
      </ul>
    </PoolListBlock>
  );
};

export default PoolList;
