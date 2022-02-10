import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { mainColor } from '../styles';
import { getMatchedIndex } from '../lib/util';
import { openInfoWindow } from '../lib/mapApi';

const SearchInput = ({
  results,
  searchValue,
  onChange,
  swimpool,
  handleClickResult,
}) => {
  const { map } = useSelector(state => ({ map: state.map.map }));
  const { marker } = useSelector(state => ({ marker: state.map.marker }));
  const { infoWindow } = useSelector(state => ({
    infoWindow: state.map.infoWindow,
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
        className="ml-2 w-full text-base"
      />
      {results.length > 0 && (
        <ul className="absolute top-11 left-0 z-1 w-full overflow-y-scroll bg-white max-h-60 border border-solid border-midNightGreen">
          {results.map(data => (
            <li
              key={data.id}
              id={data.id}
              className="text-base pl-10 py-2 hover:cursor-pointer hover:bg-slate-100 border-b border-solid border-b-cgBlue"
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
