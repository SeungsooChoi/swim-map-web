import React from 'react';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
  margin-top: 0.75rem;
  padding: 1rem;
  border: 2px solid #0ca678;
  border-radius: 0.5rem;

  .content {
    margin-right: 1rem;

    label {
      margin-left: 0.3rem;
    }
  }
`;

const Title = styled.legend`
  margin-bottom: 0.3rem;
  padding: 0 0.5rem;
`;

const Checks = ({ title, checkList, labels, onCheck }) => {
  return (
    <Fieldset>
      <Title>{title}</Title>
      {labels.map((label, index) => (
        <span key={index} className="content">
          <input
            type="checkbox"
            id={label}
            onChange={() => onCheck(index)}
            checked={checkList[index]}
          />
          <label htmlFor={label}>{label}</label>
        </span>
      ))}
    </Fieldset>
  );
};

export default Checks;
