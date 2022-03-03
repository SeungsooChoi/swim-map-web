import React from 'react';
import styled from 'styled-components';
import { commonStyle } from '../../styles';

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

const UserManagement = () => {
  return (
    <Wrapper>
      <h1>회원 관리</h1>
      <div className="contents">{/* DB Table  */}</div>
    </Wrapper>
  );
};

export default UserManagement;
