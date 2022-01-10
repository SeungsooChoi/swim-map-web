import React from 'react';
import { useReactiveVar } from '@apollo/client';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { mainColor } from '../styles';
import Profile from './user/Profile';
import { isLoggedUser } from '../apollo';

const NavContainer = styled.div`
  width: 100%;
  height: 3.75rem; // 60px
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${mainColor.lineColor};

  button {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    border: 1px solid #dddddd;
    color: #80c7fa;
    border-radius: 25px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    :hover {
      color: #1f8cff;
    }
  }
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
  padding: 0px 20px;
  box-sizing: border-box;
  input {
    font-size: 1rem;
    all: unset;
    margin-left: 1rem;
  }
`;

const Nav = ({ onClick }) => {
  const isLoggedIn = useReactiveVar(isLoggedUser);
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
      {isLoggedIn ? <Profile /> : <button onClick={onClick}>로그인</button>}
    </NavContainer>
  );
};

export default Nav;
