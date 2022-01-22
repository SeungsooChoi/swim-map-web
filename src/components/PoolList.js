import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { mainColor } from '../styles';
import PoolListItem from './PoolListItem';

const ListWrapper = styled.div`
  width: 25%;
  border-right: 1px solid ${mainColor.lineColor};
  overflow-y: scroll;
`;

const PoolList = () => {
  const { swimpool } = useSelector(state => ({
    swimpool: state.swimPool.swimPool,
  }));

  return (
    <ListWrapper>
      <PoolListItem swimpool={swimpool} />
    </ListWrapper>
  );
};

export default PoolList;
