import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;

  .content {
    margin-top: 0.75rem;
    padding: 1rem;
    border: 2px solid #0ca678;
    border-radius: 0.5rem;

    .title {
      display: block;
      margin-bottom: 0.5rem;
      width: 100%;
    }

    .radio-item {
      margin-right: 1rem;
    }

    .radio-text span {
      margin-left: 0.3rem;
    }
  }
`;

const Checkbox = ({ textArr, required }) => {
  return (
    <Wrapper>
      <span>수영장 레인 정보</span>
      {required ? <span className="isRequired">(필수)</span> : ''}
      <div className="content">
        <h1 className="title">레인 길이</h1>
        {textArr.length > 0 &&
          textArr.map((text, i) => (
            <span key={i} className="radio-item">
              <label htmlFor={text} className="radio-text">
                <input
                  type="checkbox"
                  id={text}
                  name="poolLength"
                  value={text}
                />
                <span>{text}</span>
              </label>
            </span>
          ))}
      </div>
    </Wrapper>
  );
};

export default Checkbox;
