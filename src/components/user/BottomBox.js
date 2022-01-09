import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SBottomBox = styled.div`
  text-align: center;
`;

const BottomBox = ({ cta, link, linkText }) => {
  return (
    <SBottomBox>
      <span>{cta}</span>
      <Link to={link}>{linkText}</Link>
    </SBottomBox>
  );
};

export default BottomBox;
