import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;

  .content {
    margin-top: 0.75rem /* 12px */;
    padding: 1rem /* 16px */;
    border: 2px solid #0ca678;
    border-radius: 0.5rem /* 8px */;

    .radio-label {
      display: block;
      margin-top: 0.5rem /* 8px */;
      width: 100%;

      .radio-item {
        margin-right: 1rem /* 16px */;
      }

      .radio-text {
        margin-left: 0.5rem /* 8px */;
      }
    }
  }
`;

const RadioButton = ({ textArr, required }) => {
  return (
    <Wrapper>
      <span>수영장 레인 정보</span>
      {required ? <span className="isRequired">(필수)</span> : ''}
      <div className="content">
        <label>레인 길이</label>
        <label className="radio-label">
          {textArr.length > 0 &&
            textArr.map((text, i) => (
              <span key={i} className="radio-item">
                <input type="radio" id={text} name="poolLength" value={text} />
                <label htmlFor={text} className="radio-text">
                  {text}
                </label>
              </span>
            ))}
        </label>
      </div>
    </Wrapper>
  );
};

export default RadioButton;
