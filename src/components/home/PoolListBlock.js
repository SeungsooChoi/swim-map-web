import React from 'react';
import { getMatchedIndex } from '../../lib/util';
import { openInfoWindow } from '../../lib/mapApi';
import PoolListBlockItem from './PoolListBlockItem';

const PoolListBlock = ({ swimpool, map, marker, infoWindow, filteredSido }) => {
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

  return (
    <ul>
      {/* 초기 상태 */}
      {swimpool.length > 0 &&
        filteredSido.length === 0 &&
        swimpool.map(pool => (
          <PoolListBlockItem
            key={pool.id}
            id={pool.id}
            pool={pool}
            onClick={onClick}
            onClickBackground={onClickBackground}
          />
        ))}
      {/* 시/도 필터링된 데이터가 있을 경우 */}
      {swimpool.length > 0 &&
        filteredSido.length !== 0 &&
        swimpool.map(pool => {
          if (filteredSido.includes(Number(pool.sigunguCode))) {
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
        })}
      {/* 필터링 눌렀지만 데이터가 없는 경우 */}
      {swimpool.length > 0 && filteredSido !== 0 && (
        <div>선택하신 지역에서 제공되는 수영장 데이터가 없습니다.</div>
      )}
      {swimpool.length === 0 &&
        '데이터가 없습니다. 개발자에게 문의하여 주시기 바랍니다.'}
    </ul>
  );
};

export default PoolListBlock;
