import React from 'react';
import styled from 'styled-components';

const SButton = styled.button`
  all: unset;
  margin-top: 1rem /* 16px */;
  padding: 0.75rem /* 12px */;
  width: 100%;
  border-radius: 0.5rem /* 8px */;
  text-align: center;
  background: #74c0fc;
  color: white;
  cursor: pointer;
  box-sizing: border-box;
  :hover {
    background: #4dabf7;
  }
`;

const Button = props => {
  return <SButton {...props}></SButton>;
};

export default React.memo(Button);
