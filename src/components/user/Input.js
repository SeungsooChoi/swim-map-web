import React from 'react';
import styled from 'styled-components';

const SInput = styled.input`
  margin-top: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  background-color: #fafafa;
  border: 0.5px solid rgb(219, 219, 219);
  border-radius: 0.25rem;
  box-sizing: border-box;
  font-size: 1.25rem;
  &::placeholder {
    font-size: 1.25rem;
  }
`;

const Input = props => {
  return <SInput {...props} />;
};

export default Input;
