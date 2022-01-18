import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { userLogIn } from '../apollo';
import useInputs from '../hooks/useInputs';
import { mainColor } from '../styles';
import AuthLayout from '../components/user/AuthLayout';
import BottomBox from '../components/user/BottomBox';
import Button from '../components/user/Button';
import Input from '../components/user/Input';
import Separator from '../components/user/Separator';
import routes from '../routes';

const LoginModal = styled.div`
  background: white;
  width: 500px;
  height: 600px;
  margin: 12rem auto;
  position: relative;
`;

const SLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${mainColor.fontColor};
`;

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      error
    }
  }
`;

const Login = () => {
  const [{ email, password }, onChange, reset] = useInputs({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  const onCompleted = data => {
    const {
      login: { ok, error, token },
    } = data;
    console.log(ok, error, token);

    if (!ok) {
      setErrors(error);
    }
    if (token) {
      userLogIn(token);
      reset();
      navigate('/');
    }
  };
  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  const onSubmit = e => {
    e.preventDefault();

    if (loading) {
      return;
    }
    login({
      variables: { email, password },
    });
  };

  return (
    <LoginModal>
      <AuthLayout>
        <SLink to="/">
          <Logo>swim</Logo>
        </SLink>
        <form onSubmit={onSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="이메일"
            onChange={onChange}
            value={email}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={onChange}
            value={password}
            required
          />
          <Button type="submit" disabled={password.length < 4}>
            로그인
          </Button>
          {errors}
        </form>

        <Separator />
      </AuthLayout>
      <BottomBox
        cta="가입된 계정이 없으신가요?"
        link={routes.signUp}
        linkText="회원가입"
      />
      <BottomBox cta="" link="/" linkText="처음 화면으로" />
    </LoginModal>
  );
};

export default Login;
