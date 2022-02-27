import React, { useEffect, useRef } from 'react';
import { getMatchedIndex } from '../../lib/util';
import { openInfoWindow } from '../../lib/mapApi';
import PoolListBlockItem from './PoolListBlockItem';

const PoolListBlock = ({
  swimpool,
  map,
  marker,
  infoWindow,
  filteredSido,
  filteredLane,
}) => {
  const listUl = useRef();
  const onClick = e => {
    const currentId = e.target.parentNode.parentNode.id;
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

  useEffect(() => {
    listUl.current.parentNode.scrollTop = 0;
  }, [filteredSido, filteredLane]);

  return (
    <ul ref={listUl}>
      {swimpool.length > 0 &&
        swimpool.map(pool => {
          if (filteredSido.length === 0 && filteredLane.length === 0) {
            // 선택 안한 경우
            return (
              <PoolListBlockItem
                key={pool.id}
                id={pool.id}
                pool={pool}
                onClick={onClick}
                onClickBackground={onClickBackground}
              />
            );
          } else if (filteredSido.length > 0 && filteredLane.length === 0) {
            // 시도 선택만 한 경우
            if (filteredSido.includes(Number(pool.sigunguCode))) {
              return (
                <PoolListBlockItem
                  key={pool.id}
                  id={pool.id}
                  pool={pool}
                  onClick={onClick}
                  onClickBackground={onClickBackground}
                />
              );
            }
            return null;
          } else if (filteredSido.length === 0 && filteredLane.length > 0) {
            // 레인 선택만 한 경우
            if (filteredLane.includes(String(pool.regPoolLength))) {
              return (
                <PoolListBlockItem
                  key={pool.id}
                  id={pool.id}
                  pool={pool}
                  onClick={onClick}
                  onClickBackground={onClickBackground}
                />
              );
            }
            return null;
          } else if (filteredSido.length > 0 && filteredLane.length > 0) {
            // 둘다 고른 경우
            if (
              filteredSido.includes(Number(pool.sigunguCode)) &&
              filteredLane.includes(String(pool.regPoolLength))
            ) {
              // 필터에 선택한 지역 수영장이 있을 경우
              return (
                <PoolListBlockItem
                  key={pool.id}
                  id={pool.id}
                  pool={pool}
                  onClick={onClick}
                  onClickBackground={onClickBackground}
                />
              );
            }
            return null;
          }
        })}
      {swimpool.length === 0 &&
        '데이터가 없습니다. 개발자에게 문의하여 주시기 바랍니다.'}
    </ul>
  );
};

export default React.memo(PoolListBlock);
