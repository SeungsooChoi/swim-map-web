import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import AuthLayout from '../components/user/AuthLayout';
import Button from '../components/user/Button';
import Input from '../components/user/Input';
import Separator from '../components/user/Separator';
import useInputs from '../hooks/useInputs';
import BottomBox from '../components/user/BottomBox';
import routes from '../routes';

const SIGNUP_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      id
    }
  }
`;

const Signup = () => {
  const [{ firstName, lastName, email, username, password }, onChange, reset] =
    useInputs({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
    });
  const navigate = useNavigate();

  const onCompleted = data => {
    console.log(data);
    if (!data) {
      throw Error('회원가입 에러');
    }
    if (data) {
      reset();
      navigate('/');
    }
  };

  const [createAccount, { loading }] = useMutation(SIGNUP_MUTATION, {
    onCompleted,
  });

  const onSubmit = e => {
    e.preventDefault();

    if (loading) {
      return;
    }
    createAccount({
      variables: { firstName, lastName, email, username, password },
    });
  };

  return (
    <>
      <AuthLayout>
        <Link to={routes.home}>
          <h1 className="text-7xl text-cgBlue font-semibold">Swim</h1>
        </Link>
        <form onSubmit={onSubmit} className="mt-10 w-full">
          <Input
            type="text"
            name="lastName"
            placeholder="성"
            onChange={onChange}
            required
          />
          <Input
            type="text"
            name="firstName"
            placeholder="이름"
            onChange={onChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="이메일"
            onChange={onChange}
            required
          />
          <Input
            type="text"
            name="username"
            placeholder="username"
            onChange={onChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={onChange}
            required
          />
          <Button type="submit">회원가입</Button>
        </form>

        <Separator />
        <BottomBox cta="" link={routes.home} linkText="처음 화면으로" />
      </AuthLayout>
    </>
  );
};

export default Signup;
