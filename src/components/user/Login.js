import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  all: unset;
  width: 100px;
  height: 40px;
  border: 1px solid #dddddd;
  text-align: center;
  color: #80c7fa;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: 600;
  :hover {
    color: #1f8cff;
  }
`;

const Login = () => {
  return <Button>로그인</Button>;
};

export default Login;
