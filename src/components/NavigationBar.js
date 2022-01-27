import React, { useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import Profile from './user/Profile';
import { isLoggedUser } from '../apollo';
import { Link, useNavigate } from 'react-router-dom';
import ModalPopup from './modal/ModalPopup';
import routes from '../routes';
import SearchInput from './SearchInput';
import { useSelector } from 'react-redux';

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
    navigate(routes.register);
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

  /**
   * 드롭다운메뉴에서 장소를 선택하면 상태값을 선택한 값으로 변경하고 드롭다운 닫음
   * @param {*} text 드롭다운에서 선택한 텍스트
   */
  const handleClickResult = text => {
    setSearchValue(text);
    setResults([]);
  };

  return (
    <div className="flex flex-row justify-around items-center h-16 bg-midNightGreen">
      <h1 className="font-sans text-3xl text-white">Swim</h1>
      <SearchInput
        results={results}
        searchValue={searchValue}
        onChange={onChange}
        handleClickResult={handleClickResult}
      />
      <>
        {isLoggedIn ? (
          <Profile />
        ) : (
          <Link to={routes.login} className="px-6 py-4 text-white">
            로그인
          </Link>
        )}
        <button className="px-6 py-4 text-white" onClick={onClick}>
          장소 등록
        </button>
        <ModalPopup
          isOpen={isOpen}
          close={onClose}
          onRequestClose={onClose}
          handleClickOk={handleClickOk}
          title="로그인이 필요한 서비스입니다."
          content="로그인하시겠습니까?"
        />
      </>
    </div>
  );
};

export default NavigationBar;
