import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getMatchedIndex } from '../lib/util';
import { openInfoWindow } from '../lib/mapApi';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  width: 25rem;
  height: 2.5rem;
  border: 1px solid ${mainColor.lineColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  padding: 0px 20px;
  box-sizing: border-box;
  position: relative;
  input {
    font-size: 1rem;
    all: unset;
    margin-left: 1rem;
    width: 100%;
  }
`;

const AutoComplete = styled.ul`
  position: absolute;
  top: 3rem;
  left: 0;
  z-index: 1;
  width: inherit;
  background: white;
  border: 1px solid #80c7fa;
  max-height: 15rem;
  overflow-y: scroll;
  li {
    padding: 0.5rem 0rem;
    cursor: pointer;
    :not(:last-child) {
      border-bottom: 1px solid #5cd1f5;
    }
  }
`;

const SearchInput = ({ results, searchValue, onChange, handleClickResult }) => {
  const { map } = useSelector(state => ({ map: state.map.map }));
  const { marker } = useSelector(state => ({ marker: state.map.marker }));
  const { infoWindow } = useSelector(state => ({
    infoWindow: state.map.infoWindow,
  }));
  const { swimpool } = useSelector(state => ({
    swimpool: state.swimPool.swimPool,
  }));

  const onClick = e => {
    const currentId = e.target.id;
    const currentText = e.target.innerHTML;
    handleClickResult(currentText);
    const id = getMatchedIndex(swimpool, currentId);
    openInfoWindow(map, marker, id, infoWindow);
  };

  return (
    <Wrapper>
      <FontAwesomeIcon icon={faSearch} size="1x" color={mainColor.fontColor} />
      <input
        name="searchInput"
        type="text"
        value={searchValue}
        placeholder="검색"
        onChange={onChange}
        autoComplete="off"
      />
      {results.length > 0 && (
        <AutoComplete>
          {results.map(data => (
            <li key={data.id} id={data.id} onClick={onClick}>
              {data.name}
            </li>
          ))}
        </AutoComplete>
      )}
    </Wrapper>
  );
};

export default SearchInput;
