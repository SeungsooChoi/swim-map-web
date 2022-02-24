import React from 'react';
import styled from 'styled-components';
import { getIsShowFilteredArr } from '../../lib/util';
import PoolListBlock from './PoolListBlock';

const Wrapper = styled.div`
  padding-right: 1rem;
  width: 52%;
  max-height: 752px;
  overflow-y: scroll;
`;

const PoolList = ({ swimpool, ...rest }) => {
  return (
    <Wrapper>
      <PoolListBlock swimpool={getIsShowFilteredArr(swimpool)} {...rest} />
    </Wrapper>
  );
};

export default PoolList;
