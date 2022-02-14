import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getMatchedIndex } from '../../lib/util';
import { openInfoWindow } from '../../lib/mapApi';
import styled from 'styled-components';

const SearchInputBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 2rem;
  width: 25rem;
  height: 3rem;
  background: #fff;
  border: 1px solid #dddddd;
  border-radius: 12rem;

  input {
    all: unset;
    width: 100%;
    cursor: text;
  }
`;

const SearchList = styled.ul`
  position: absolute;
  top: 3.5rem;
  left: 0;
  background: white;
  width: 100%;
  max-height: 20rem;
  overflow-y: scroll;
  border: 1px solid #c4c4c4;
`;

const SearchListItem = styled.li`
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #c4c4c4;
  :hover {
    cursor: pointer;
    background: #f1f3f5;
  }
`;

const SearchInput = ({
  results,
  searchValue,
  onChange,
  swimpool,
  handleClickResult,
  map,
  marker,
  infoWindow,
}) => {
  // 검색 리스트 클릭이벤트
  const onClick = e => {
    const currentId = e.target.id;
    const currentText = e.target.innerHTML;
    handleClickResult(currentText);
    const matchedId = getMatchedIndex(swimpool, currentId);

    if (matchedId !== -1) {
      openInfoWindow(map, marker, matchedId, infoWindow);
    }
  };

  return (
    <SearchInputBlock>
      <input
        name="searchInput"
        type="text"
        value={searchValue}
        placeholder="검색"
        onChange={onChange}
        autoComplete="off"
      />
      <FontAwesomeIcon icon={faSearch} size="1x" color="#c4c4c4" />
      {results.length > 0 && (
        <SearchList>
          {results.map(data => (
            <SearchListItem key={data.id} id={data.id} onClick={onClick}>
              {data.name}
            </SearchListItem>
          ))}
        </SearchList>
      )}
    </SearchInputBlock>
  );
};

export default SearchInput;
