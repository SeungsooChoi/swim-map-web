import React, { useCallback } from 'react';
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

const Checkbox = ({ checkedList, setCheckedLists, dataList, required }) => {
  // 개별 체크 클릭 시 발생하는 함수
  const onCheckedElement = useCallback(
    (checked, list) => {
      if (checked) {
        setCheckedLists([...checkedList, list]);
      } else {
        setCheckedLists(checkedList.filter(el => el !== list));
      }
    },
    [checkedList, setCheckedLists],
  );

  return (
    <Wrapper>
      <span>수영장 레인 정보</span>
      {required ? <span className="isRequired">(필수)</span> : ''}
      <div className="content">
        <h1 className="title">레인 길이</h1>
        {dataList.map(list => (
          <span key={list.id} className="radio-item">
            <label htmlFor={list.data} className="radio-text">
              <input
                type="checkbox"
                id={list.data}
                onChange={e => onCheckedElement(e.target.checked, list)}
              />
              <span>{list.data}</span>
            </label>
          </span>
        ))}
      </div>
    </Wrapper>
  );
};

export default Checkbox;
