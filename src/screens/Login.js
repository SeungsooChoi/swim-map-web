import React from 'react';
import styled from 'styled-components';
import LoginContainer from '../containers/login/LoginContainer';

const Wrapper = styled.div`
  height: 100vh;
`;

const Login = () => {
  return (
    <Wrapper>
      <LoginContainer />
    </Wrapper>
  );
};

export default Login;
