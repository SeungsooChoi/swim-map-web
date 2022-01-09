import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthLayout from '../components/user/AuthLayout';
import Button from '../components/user/Button';
import Input from '../components/user/Input';
import Separator from '../components/user/Separator';
import { mainColor } from '../styles';

const SWrapper = styled.div`
  margin-top: 10rem;
  padding: 0rem 20rem;
`;

const SLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${mainColor.fontColor};
`;

const Signup = () => {
  return (
    <SWrapper>
      <AuthLayout>
        <SLink to="/">
          <Logo>swim</Logo>
        </SLink>
        <form>
          <Input type="text" name="username" placeholder="username" />
          <Input type="password" name="password" placeholder="password" />
          <Button>로그인</Button>
        </form>

        <Separator />
      </AuthLayout>
    </SWrapper>
  );
};

export default Signup;
