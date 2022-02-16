import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsShowFilteredArr } from '../../lib/util';
import HeaderTemplate from '../../components/home/HeaderTemplate';
import Logo from '../../components/common/Logo';
import SearchInput from '../../components/home/SearchInput';
import UserProfile from '../../components/home/UserProfile';
import RegisterButton from '../../components/home/RegisterButton';

const HeaderContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const { map } = useSelector(state => ({ map: state.map.map }));
  const { marker } = useSelector(state => ({ marker: state.map.marker }));
  const { infoWindow } = useSelector(state => ({
    infoWindow: state.map.infoWindow,
  }));
  const { swimpool } = useSelector(state => ({
    swimpool: state.swimPool.swimPool,
  }));

  const matchName = (name, text) => {
    if (text !== '') {
      return name.includes(text);
    }
  };

  // searchInput에 넘겨줄 onChange 함수
  const onChange = e => {
    const onSearch = text => {
      const dataArr = [...getIsShowFilteredArr(swimpool)];

      let result = dataArr.filter(pool => matchName(pool.name, text) === true);
      setResults(result);
    };
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
    <HeaderTemplate>
      <Logo />
      <SearchInput
        results={results}
        searchValue={searchValue}
        onChange={onChange}
        swimpool={getIsShowFilteredArr(swimpool)}
        handleClickResult={handleClickResult}
        map={map}
        marker={marker}
        infoWindow={infoWindow}
      />
      {/* 이 아래를 새로운 컴포넌트로..? */}
      <>
        <UserProfile />
        <RegisterButton />
      </>
    </HeaderTemplate>
  );
};

export default HeaderContainer;
