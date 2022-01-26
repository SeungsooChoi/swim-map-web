import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getMatchedIndex } from '../lib/util';
import { openInfoWindow } from '../lib/mapApi';
import { useSelector } from 'react-redux';

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
    const matchedId = getMatchedIndex(swimpool, currentId);

    if (matchedId !== -1) {
      openInfoWindow(map, marker, matchedId, infoWindow);
    }
  };

  return (
    <div className="relative w-1/3 flex flex-row items-center p-2 pl-4 bg-white rounded-3xl">
      <FontAwesomeIcon icon={faSearch} size="1x" color={mainColor.fontColor} />
      <input
        name="searchInput"
        type="text"
        value={searchValue}
        placeholder="검색"
        onChange={onChange}
        autoComplete="off"
        className="ml-2 w-10/12 text-base"
      />
      {results.length > 0 && (
        <ul className="absolute top-11 left-0 z-1 w-full overflow-y-scroll bg-white max-h-60 border border-solid border-blue-600">
          {results.map(data => (
            <li
              key={data.id}
              id={data.id}
              className="text-base pl-10 py-2 hover:cursor-pointer hover:bg-slate-100"
              onClick={onClick}
            >
              {data.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
