import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { userLogIn } from '../apollo';
import useInputs from '../hooks/useInputs';
import AuthLayout from '../components/user/AuthLayout';
import BottomBox from '../components/user/BottomBox';
import Button from '../components/user/Button';
import Input from '../components/user/Input';
import Separator from '../components/user/Separator';
import routes from '../routes';

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
    <div className="h-screen">
      <AuthLayout>
        <Link to={routes.home}>
          <h1 className="text-7xl text-cgBlue font-semibold">Swim</h1>
        </Link>
        <form onSubmit={onSubmit} className="mt-10 w-full">
          <label className="block mb-4 w-full">
            <span className="block font-medium text-slate-700">이메일</span>
            <Input
              type="email"
              name="email"
              placeholder="swim@example.com"
              onChange={onChange}
              value={email}
              required
            />
          </label>
          <label className="block mb-4 w-full">
            <span className="block font-medium text-slate-700">비밀번호</span>
            <Input
              type="password"
              name="password"
              onChange={onChange}
              value={password}
              required
            />
          </label>
          <Button type="submit">로그인</Button>
          {errors}
        </form>

        <Separator />
        <BottomBox
          cta="가입된 계정이 없으신가요?"
          link={routes.signUp}
          linkText="회원가입"
        />
        <BottomBox cta="" link={routes.home} linkText="처음 화면으로" />
      </AuthLayout>
    </div>
  );
};

export default Login;
