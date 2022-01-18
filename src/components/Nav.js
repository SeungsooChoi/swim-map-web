import React, { useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { mainColor } from '../styles';
import Profile from './user/Profile';
import { isLoggedUser } from '../apollo';
import { Link, useNavigate } from 'react-router-dom';
import ModalPopup from './modal/ModalPopup';
import routes from '../routes';

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
  padding: 0px 20px;
  box-sizing: border-box;
  input {
    font-size: 1rem;
    all: unset;
    margin-left: 1rem;
  }
`;

const SLink = styled(Link)`
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
`;

const SButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border: 1px solid #80c7fa;
  background: #80c7fa;
  color: white;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: #1f8cff;
  }
`;

const Nav = () => {
  const isLoggedIn = useReactiveVar(isLoggedUser);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    if (!isLoggedIn) {
      setIsOpen(true);
      return;
    }
    console.log('장소등록 화면 이동');
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleClickOk = () => {
    navigate(routes.login);
  };

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
      <>
        {isLoggedIn ? <Profile /> : <SLink to={routes.login}>로그인</SLink>}
        <SButton onClick={onClick}>장소 등록</SButton>
        <ModalPopup
          isOpen={isOpen}
          close={onClose}
          onRequestClose={onClose}
          handleClickOk={handleClickOk}
          title="로그인이 필요한 서비스입니다."
          content="로그인하시겠습니까?"
        />
      </>
    </NavContainer>
  );
};

export default Nav;
