import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../styles';

const ListWrapper = styled.div`
  width: 25rem; // 400px
  border-right: 1px solid ${mainColor.lineColor};
`;

const SwimList = () => {
  return <ListWrapper>SwimList</ListWrapper>;
};

export default SwimList;
