import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { userLogOut } from '../../apollo';
import useLoggedInUser from '../../hooks/useLoggedInUser';
import routes from '../../routes';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 13rem /* 208px */;
`;

const SButton = styled.button`
  padding: 0.75rem 1rem;
  border: 1px solid white;
  border-radius: 1.5rem /* 24px */;
  background: #ced4da;
  cursor: pointer;

  :hover {
    background: #adb5bd;
  }
`;

const SLink = styled(Link)`
  all: unset;
  padding: 0.25rem 0.5rem;
  border: 1px solid white;
  border-radius: 1.5rem /* 24px */;
  cursor: pointer;
`;

const Profile = () => {
  const { data } = useLoggedInUser();

  const onClick = () => {
    userLogOut();
  };

  return (
    <Wrapper>
      {data?.seeProfile?.username && (
        <>
          <span>{data.seeProfile.username} 님</span>
          <SButton onClick={onClick}>로그아웃</SButton>
          {data.seeProfile.isAdmin && (
            <SLink to={`${routes.admin}/dashboard`}>Admin</SLink>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Profile;
