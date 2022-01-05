import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const buttonStyle = css`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border: 1px solid #dddddd;
  color: #80c7fa;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: #1f8cff;
  }
`;

const SButton = styled.button`
  ${buttonStyle}
`;
const SLink = styled(Link)`
  ${buttonStyle}
`;

const Button = props => {
  return props.to ? <SLink {...props} /> : <SButton {...props} />;
};

export default Button;