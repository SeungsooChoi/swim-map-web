import React from 'react';
import styled from 'styled-components';
import { formatDate } from '../lib/util';
import { mainColor } from '../styles';

const SwimListItemBlock = styled.div`
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

const SwimListItem = ({ swimpool }) => {
  return (
    <div>
      {swimpool.length > 0
        ? swimpool.map(pool => (
            <SwimListItemBlock key={pool.id}>
              <Header>
                <span>{pool.sigunguName}</span>
              </Header>
              <h1>
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
            </SwimListItemBlock>
          ))
        : '데이터를 불러오는 중 입니다.'}
    </div>
  );
};

export default SwimListItem;
