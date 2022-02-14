import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1.25rem /* 20px */;
  margin-bottom: 1.5rem /* 24px */;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-transform: uppercase;

  .divide {
    width: 100%;
    height: 1px;
    background: #adb5bd;
  }

  .text {
    margin: 0 0.625rem;
    font-weight: 700;
  }
`;

const Separator = () => {
  return (
    <Wrapper>
      <div className="divide"></div>
      <span className="text">Or</span>
      <div className="divide"></div>
    </Wrapper>
  );
};

export default Separator;
