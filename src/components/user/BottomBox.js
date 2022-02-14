import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 1.25rem /* 20px */;
  text-align: center;

  .content {
    margin-right: 0.75rem /* 12px */;
  }
`;

const SLink = styled(Link)`
  all: unset;
  color: #339af0;
  font-weight: 700;
  cursor: pointer;
`;

const BottomBox = ({ cta, link, linkText }) => {
  return (
    <Wrapper>
      <span className={cta !== '' ? `content` : ``}>{cta}</span>
      <SLink to={link}>{linkText}</SLink>
    </Wrapper>
  );
};

export default BottomBox;
