import React from 'react';
import { formatDate, getMatchedIndex } from '../../lib/util';
import { openInfoWindow } from '../../lib/mapApi';
import styled from 'styled-components';

const PoolListItemLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 0.725rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  min-height: 160px;
  :hover {
    cursor: pointer;
    background: #f1f3f5;
  }
`;

const Title = styled.h1`
  font-weight: 700;
`;

const Text = styled.div`
  margin-top: 0.6rem;
`;

const Divide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const SButton = styled.button`
  all: unset;
  padding: 0.125rem;
  width: 10rem;
  height: 2rem;
  text-align: center;
  background: #a5d8ff;
  color: white;
  border-radius: 0.5rem;
  :hover {
    background: #74c0fc;
  }
`;

const UpdateText = styled.div`
  font-weight: 300;
`;

const PoolListItem = ({ swimpool, map, marker, infoWindow }) => {
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
    <>
      {swimpool.length > 0
        ? swimpool.map(pool => (
            <PoolListItemLi
              key={pool.id}
              id={pool.id}
              onClick={onClickBackground}
            >
              <div>
                {/* <span>{pool.sigunguName}</span> */}
                <Title>
                  {pool.name} ({pool.inOutDoorDivName})
                </Title>
                {pool.roadNmAddr ? (
                  <Text>{pool.roadNmAddr}</Text>
                ) : pool.lotNoAddr ? (
                  <Text>{pool.lotNoAddr}</Text>
                ) : (
                  <Text>등록된 주소 정보가 없습니다.</Text>
                )}

                <div>
                  {pool.regPoolLaneCnt > 0 && (
                    <Text>
                      {pool.regPoolLength}m 레인 : {pool.regPoolLaneCnt}개
                    </Text>
                  )}

                  {pool.irregPoolLaneCnt > 0 && (
                    <Text>
                      {pool.irregPoolLength}m 레인 : {pool.irregPoolLaneCnt}개
                    </Text>
                  )}
                </div>
              </div>
              <Divide>
                <SButton onClick={onClick}>지도에서 보기</SButton>
                <UpdateText>
                  업데이트 날짜 : {formatDate(Number(pool.updatedAt))}
                </UpdateText>
              </Divide>
            </PoolListItemLi>
          ))
        : '데이터를 불러오는 중 입니다.'}
    </>
  );
};

export default PoolListItem;
