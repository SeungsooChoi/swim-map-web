import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { commonStyle } from '../../styles';
import Table from './Table';

const Wrapper = styled.div`
  max-width: 70%;
  height: 100vh;
  padding: 2rem;

  .contents {
    margin-top: 1rem;
    width: 80%;
    height: 80%;
    border-radius: 0.5rem;
    box-shadow: ${commonStyle.boxShadow};
    overflow: scroll;
  }
`;

const PoolManagement = () => {
  const { swimpool } = useSelector(state => ({
    swimpool: state.swimPool.swimPool,
  }));

  return (
    <Wrapper>
      <h1>수영장 등록 관리</h1>
      <div className="contents">
        <Table swimpool={swimpool} isShow={false} />
      </div>
    </Wrapper>
  );
};

export default PoolManagement;
