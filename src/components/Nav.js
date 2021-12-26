import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { mainColor } from '../styles';

const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${mainColor.lineColor};
`;

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${mainColor.fontColor};
`;

const SearchBar = styled.div`
  width: 400px;
  height: 40px;
  border: 1px solid ${mainColor.lineColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  input {
    font-size: 1rem;
    all: unset;
    margin-left: 8px;
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <Logo>Swim</Logo>
      <SearchBar>
        <FontAwesomeIcon icon={faSearch} size="1x" />
        <input type="text" placeholder="검색" />
      </SearchBar>
      {/* profile */}
    </NavContainer>
  );
};

export default Nav;