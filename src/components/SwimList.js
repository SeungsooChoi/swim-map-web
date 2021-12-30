import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { mainColor } from '../styles';
import SwimListItem from './SwimListItem';

const ListWrapper = styled.div`
  width: 25rem; // 400px
  border-right: 1px solid ${mainColor.lineColor};
  overflow-y: scroll;
`;

const SwimList = () => {
  const { swimpool } = useSelector(state => ({
    swimpool: state.swimPool.swimPool,
  }));

  return (
    <ListWrapper>
      <SwimListItem swimpool={swimpool} />
    </ListWrapper>
  );
};

export default SwimList;
