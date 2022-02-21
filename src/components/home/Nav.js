import React, { useState } from 'react';
import styled from 'styled-components';
import { sidoData } from '../../lib/sidoData';
import Dropdown from '../common/Dropdown';

const NavBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 2rem;
  height: 5rem;
  border-bottom: 1px solid #c4c4c4;
`;

const SelectedItem = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;

  li {
    padding: 0.625rem 1.25rem;
    border: 1px solid #4263eb;
    color: #4263eb;
    border-radius: 2rem;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

const Nav = () => {
  const [sido, setSido] = useState(
    sidoData.map(item => {
      return {
        name: item.name,
        clicked: false,
      };
    }),
  );
  const [lane, setLane] = useState([
    { name: '50m', clicked: false },
    { name: '25m', clicked: false },
    { name: '기타', clicked: false },
  ]);

  const getChangedArr = (arr, item) => {
    let newArr = [...arr];
    newArr.forEach(data => {
      if (data.name === item.name) {
        data.clicked = !item.clicked;
      }
    });
    return newArr;
  };

  // 시/도명 드롭다운내의 아이템 클릭이벤트
  const handleClickSido = item => {
    setSido(getChangedArr(sido, item));
  };

  // 클릭한 시/도명 제거 클릭이벤트
  const handleClickRemoveSelectedSidoItem = item => {
    setSido(getChangedArr(sido, item));
  };

  // 레인 드롭다운내의 아이템 클릭이벤트
  const handleClickLane = item => {
    setLane(getChangedArr(lane, item));
  };

  // 클릭한 레인 제거 클릭이벤트
  const handleClickSelectedLaneItem = item => {
    setLane(getChangedArr(lane, item));
  };

  return (
    <NavBlock>
      <Dropdown text="시/도명">
        <ul>
          {sido.map((item, i) => (
            <li
              key={i}
              className={`${item.clicked ? 'clicked' : 'notclicked'}`}
              onClick={() => handleClickSido(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </Dropdown>
      <Dropdown text="레인">
        <ul>
          {lane.map((item, i) => (
            <li
              key={i}
              className={`${item.clicked ? 'clicked' : 'notclicked'}`}
              onClick={() => handleClickLane(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </Dropdown>
      <SelectedItem>
        {/* 시/도 */}
        {sido.map((item, i) =>
          item.clicked ? (
            <li key={i} onClick={() => handleClickRemoveSelectedSidoItem(item)}>
              {item.name} <span>X</span>
            </li>
          ) : null,
        )}
        {/* 레인 */}
        {lane.map((item, i) =>
          item.clicked ? (
            <li key={i} onClick={() => handleClickSelectedLaneItem(item)}>
              {item.name} <span>X</span>
            </li>
          ) : null,
        )}
      </SelectedItem>
    </NavBlock>
  );
};

export default Nav;
