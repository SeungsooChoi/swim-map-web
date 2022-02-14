import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogIn } from '../../apollo';
import Form from '../../components/common/Form';
import Logo from '../../components/common/Logo';
import Input from '../../components/common/Input';
import AuthLayout from '../../components/user/AuthLayout';
import BottomBox from '../../components/user/BottomBox';
import Button from '../../components/user/Button';
import Separator from '../../components/user/Separator';
import useInputs from '../../hooks/useInputs';
import routes from '../../routes';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      error
    }
  }
`;

const LoginContainer = () => {
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
    <>
      <AuthLayout>
        <Logo />
        <Form onSubmit={onSubmit}>
          <Input
            text="이메일"
            type="email"
            name="email"
            placeholder="swim@example.com"
            onChange={onChange}
            value={email}
            required
          />
          <Input
            text="비밀번호"
            type="password"
            name="password"
            onChange={onChange}
            value={password}
            required
          />
          <Button type="submit">로그인</Button>
          {errors}
        </Form>

        <Separator />
        <BottomBox
          cta="가입된 계정이 없으신가요?"
          link={routes.signUp}
          linkText="회원가입"
        />
        <BottomBox cta="" link={routes.home} linkText="처음 화면으로" />
      </AuthLayout>
    </>
  );
};

export default LoginContainer;
