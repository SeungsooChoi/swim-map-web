import React from 'react';
import styled from 'styled-components';
import { formatDate } from '../../lib/util';
import { commonStyle } from '../../styles';

const PoolListItemLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 0.725rem;
  box-shadow: ${commonStyle.boxShadow};
  min-height: 160px;
  :hover {
    cursor: pointer;
    background: #f1f3f5;
  }
`;

const Title = styled.h1`
  font-weight: 700;

  span {
    color: white;
    font-weight: 400;
    margin-left: 0.5rem;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
  }
  span.inDoor {
    background: #868e96;
  }
  span.outDoor {
    background: #868e96;
  }
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
  border: 1px solid black;
  border-radius: 0.5rem;
  :hover {
    background: #ced4da;
  }
`;

const UpdateText = styled.div`
  font-weight: 300;
`;

const PoolListBlockItem = ({ id, pool, onClick, onClickBackground }) => {
  const INDOOR = 'inDoor';
  const OUTDOOR = 'outDoor';
  return (
    <PoolListItemLi id={id} onClick={onClickBackground}>
      <div>
        {/* <span>{pool.sigunguName}</span> */}
        <Title>
          {pool.name}
          {pool.inOutDoorDivName === '실내' ? (
            <span className={INDOOR}>{pool.inOutDoorDivName}</span>
          ) : pool.inOutDoorDivName === '실외' ? (
            <span className={OUTDOOR}>{pool.inOutDoorDivName}</span>
          ) : (
            <>
              <span className={INDOOR}>
                {pool.inOutDoorDivName.split(' ')[0]}
              </span>
              <span className={OUTDOOR}>
                {pool.inOutDoorDivName.split(' ')[1]}
              </span>
            </>
          )}
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
  );
};

export default PoolListBlockItem;
