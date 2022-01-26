import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { formatDate, getMatchedIndex } from '../lib/util';
import { mainColor } from '../styles';
import { openInfoWindow } from '../lib/mapApi';

const PoolListItemBlock = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${mainColor.lineColor};
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LaneInfo = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: 1rem;
  }
`;

const PoolListItem = ({ swimpool }) => {
  const { map } = useSelector(state => ({ map: state.map.map }));
  const { marker } = useSelector(state => ({ marker: state.map.marker }));
  const { infoWindow } = useSelector(state => ({
    infoWindow: state.map.infoWindow,
  }));

  const onClick = e => {
    const currentId = e.target.parentNode.id;
    const id = getMatchedIndex(swimpool, currentId);

    if (id !== -1) {
      openInfoWindow(map, marker, id, infoWindow);
    }
  };

  const onClickBackground = e => {
    const {
      target,
      target: { id },
      currentTarget,
    } = e;
    if (target === currentTarget) {
      const currentId = id;
      const matchedId = getMatchedIndex(swimpool, currentId);

      if (matchedId !== -1) {
        openInfoWindow(map, marker, matchedId, infoWindow);
      }
    }
  };

  return (
    <>
      {swimpool.length > 0
        ? swimpool.map(pool => (
            <li
              key={pool.id}
              id={pool.id}
              className="p-4 border-b border-solid border-b-slate-300 hover:cursor-pointer hover:bg-slate-100"
              onClick={onClickBackground}
            >
              <span>{pool.sigunguName}</span>
              <h1 className="mt-2 tracking-tight text-lg font-semibold">
                {pool.name} ({pool.inOutDoorDivName})
              </h1>
              {pool.roadNmAddr ? (
                <span>{pool.roadNmAddr}</span>
              ) : pool.lotNoAddr ? (
                <span>{pool.lotNoAddr}</span>
              ) : (
                <span>등록된 주소 정보가 없습니다.</span>
              )}

              <LaneInfo>
                {pool.regPoolLaneCnt > 0 && (
                  <span>
                    {pool.regPoolLength}m 레인 : {pool.regPoolLaneCnt}개
                  </span>
                )}

                {pool.irregPoolLaneCnt > 0 && (
                  <span>
                    {pool.irregPoolLength}m 레인 : {pool.irregPoolLaneCnt}개
                  </span>
                )}
              </LaneInfo>
              <div>업데이트 날짜 :{formatDate(Number(pool.updatedAt))}</div>
              <button
                className="w-1/2 mt-4 mx-auto p-3 block bg-sky-600/60 text-white rounded-3xl hover:bg-blue-600"
                onClick={onClick}
              >
                지도에서 보기
              </button>
            </li>
          ))
        : '데이터를 불러오는 중 입니다.'}
    </>
  );
};

export default PoolListItem;
