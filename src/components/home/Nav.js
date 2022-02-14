import React from 'react';
import styled from 'styled-components';

const NavBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 2rem;
  height: 5rem;
  border-bottom: 1px solid #c4c4c4;
`;

const Nav = () => {
  return <NavBlock>nav</NavBlock>;
};

export default Nav;
