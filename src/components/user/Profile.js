import React from 'react';
import styled from 'styled-components';
import { userLogOut } from '../../apollo';
import useUser from '../../hooks/useUser';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 13rem;
`;
const SButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border: 1px solid #dddddd;
  color: #80c7fa;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: #1f8cff;
  }
`;

const Profile = () => {
  const { data } = useUser();

  const onClick = () => {
    userLogOut();
  };

  return (
    <Container>
      <span>{data?.seeProfile?.username} 님</span>
      <SButton onClick={onClick}>로그아웃</SButton>
    </Container>
  );
};

export default Profile;
