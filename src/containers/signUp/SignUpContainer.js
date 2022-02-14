import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/common/Form';
import Logo from '../../components/common/Logo';
import Input from '../../components/Input';
import AuthLayout from '../../components/user/AuthLayout';
import BottomBox from '../../components/user/BottomBox';
import Button from '../../components/user/Button';
import Separator from '../../components/user/Separator';
import useInputs from '../../hooks/useInputs';
import routes from '../../routes';

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
const SignUpContainer = () => {
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
        <Logo />
        <Form onSubmit={onSubmit}>
          <Input
            text="성"
            type="text"
            name="lastName"
            placeholder="성"
            onChange={onChange}
            required
          />
          <Input
            text="이름"
            type="text"
            name="firstName"
            placeholder="이름"
            onChange={onChange}
            required
          />
          <Input
            text="이메일"
            type="email"
            name="email"
            placeholder="이메일"
            onChange={onChange}
            required
          />
          <Input
            text="닉네임"
            type="text"
            name="username"
            placeholder="username"
            onChange={onChange}
            required
          />
          <Input
            text="비밀번호"
            type="password"
            name="password"
            placeholder="password"
            onChange={onChange}
            required
          />
          <Button type="submit">회원가입</Button>
        </Form>

        <Separator />
        <BottomBox cta="" link={routes.home} linkText="처음 화면으로" />
      </AuthLayout>
    </>
  );
};

export default SignUpContainer;
