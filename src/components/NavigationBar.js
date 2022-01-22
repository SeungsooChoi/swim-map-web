import React, { useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import styled from 'styled-components';
import { mainColor } from '../styles';
import Profile from './user/Profile';
import { isLoggedUser } from '../apollo';
import { Link, useNavigate } from 'react-router-dom';
import ModalPopup from './modal/ModalPopup';
import routes from '../routes';
import SearchInput from './SearchInput';
import { useSelector } from 'react-redux';

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

const NavigationBar = () => {
  const isLoggedIn = useReactiveVar(isLoggedUser);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const { swimpool } = useSelector(state => ({
    swimpool: state.swimPool.swimPool,
  }));
  const navigate = useNavigate();

  // 장소등록 버튼 클릭이벤트
  const onClick = () => {
    if (!isLoggedIn) {
      setIsOpen(true);
      return;
    }
    console.log('장소등록 화면 이동');
  };

  // 로그인 팝업 닫는이벤트
  const onClose = () => {
    setIsOpen(false);
  };

  // 로그인 필요 서비스 유도
  const handleClickOk = () => {
    navigate(routes.login);
  };

  const matchName = (name, text) => {
    if (text !== '') {
      return name.includes(text);
    }
  };

  const onSearch = text => {
    const dataArr = [...swimpool];

    let result = dataArr.filter(pool => matchName(pool.name, text) === true);
    setResults(result);
  };

  // searchInput에 넘겨줄 onChange 함수
  const onChange = e => {
    const { value } = e.target;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <NavContainer id="nav">
      <Logo>Swim</Logo>
      <SearchInput
        results={results}
        searchValue={searchValue}
        onChange={onChange}
      />
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

export default NavigationBar;
