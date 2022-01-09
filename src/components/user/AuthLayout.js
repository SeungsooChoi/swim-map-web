import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 5rem 2rem 5rem;
  form {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }
`;

const AuthLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AuthLayout;
