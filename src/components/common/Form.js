import React from 'react';
import styled from 'styled-components';

const SForm = styled.form`
  margin-top: 2.5rem /* 40px */;
  width: 100%;
`;

const Form = ({ children, ...rest }) => {
  return <SForm {...rest}>{children}</SForm>;
};

export default Form;
