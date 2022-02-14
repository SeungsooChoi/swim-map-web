import React from 'react';
import styled from 'styled-components';

const HeaderTemplateBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 5rem;
  border-bottom: 1px solid #c4c4c4;
  background: #fff;
`;

const HeaderTemplate = ({ children }) => {
  return <HeaderTemplateBlock>{children}</HeaderTemplateBlock>;
};

export default HeaderTemplate;
