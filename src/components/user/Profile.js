import React, { useCallback } from 'react';
import styled from 'styled-components';
import { userLogOut } from '../../apollo';
import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 13rem;
`;

const Profile = () => {
  const onClick = useCallback(() => {
    userLogOut();
  });

  return (
    <Container>
      <span>프로필</span>
      <Button onClick={onClick}>로그아웃</Button>
    </Container>
  );
};

export default Profile;
