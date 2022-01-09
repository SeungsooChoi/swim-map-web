import React from 'react';
import styled from 'styled-components';

const SButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 0;
  width: 100%;
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #0095f6;
  color: white;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;

const Button = props => {
  return <SButton {...props} />;
};

export default Button;
