import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SLink = styled(Link)`
  all: unset;
  display: inline-block;
  padding: 1rem;
  cursor: pointer;
`;

const NavLinkItem = ({ id, to, clicked, onClick, children }) => {
  return (
    <SLink
      id={id}
      to={to}
      className={clicked ? `clicked` : `nonClicked`}
      onClick={onClick}
    >
      {children}
    </SLink>
  );
};

export default NavLinkItem;
