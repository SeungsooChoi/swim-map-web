import React from 'react';
import styled from 'styled-components';

const AutoLayoutBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 11rem /* 176px */;
  padding-left: 24rem /* 384px */;
  padding-right: 24rem /* 384px */;
  height: 100%;
`;

const AuthLayout = ({ children }) => {
  return <AutoLayoutBlock>{children}</AutoLayoutBlock>;
};

export default AuthLayout;
