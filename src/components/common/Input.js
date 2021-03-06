import React from 'react';
import styled from 'styled-components';
import { commonStyle } from '../../styles';

const Label = styled.label`
  display: block;
  margin-bottom: 1rem /* 16px */;
  width: 100%;

  .isRequired {
    margin-left: 0.25rem /* 4px */;
    color: #f03e3e;
  }

  input {
    all: unset;
    display: block;
    margin-top: 0.75rem /* 12px */;
    padding: 0.5rem 0.75rem;
    width: 100%;
    border: 1px solid #c4c4c4;
    box-shadow: ${commonStyle.boxShadow};
    border-radius: 0.5rem;
    box-sizing: border-box;
  }

  input[type='text'] {
    cursor: text;
  }
  input[type='email'] {
    cursor: text;
  }
  input[type='password'] {
    cursor: text;
  }
`;

const Input = ({ text, required, ...rest }) => {
  return (
    <Label>
      <span>{text}</span>
      {required ? <span className="isRequired">(필수)</span> : ''}
      <input {...rest} />
    </Label>
  );
};

export default React.memo(Input);
