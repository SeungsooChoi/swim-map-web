import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { mainColor } from '../styles';
import Login from './user/Login';
import Profile from './user/Profile';

const NavContainer = styled.div`
  width: 100%;
  height: 3.75rem; // 60px
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
    margin-left: 1rem;
  }
`;

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavContainer id="nav">
      <Logo>Swim</Logo>
      <SearchBar>
        <FontAwesomeIcon
          icon={faSearch}
          size="1x"
          color={mainColor.fontColor}
        />
        <input type="text" placeholder="검색" />
      </SearchBar>
      {isLoggedIn ? <Profile /> : <Login />}
    </NavContainer>
  );
};

export default Nav;
