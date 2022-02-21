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
  const [selectedSido, setSelectedSido] = useState([]);
  const [selectedLane, setSelectedLane] = useState([]);
  const sidoNameArr = sidoData.map(item => Object.keys(item));
  const lane = ['50m', '25m', '기타'];

  // 시/도명 드롭다운내의 아이템 클릭이벤트
  const handleClickSido = text => {
    const currentSido = [...selectedSido, text];
    setSelectedSido(currentSido);
  };

  // 클릭한 시/도명 제거 클릭이벤트
  const handleClickRemoveSelectedSidoItem = text => {
    const targetIndex = selectedSido.indexOf(text);
    const sidoArr = [...selectedSido];
    // 선택한 요소 삭제.
    sidoArr.splice(targetIndex, 1);
    setSelectedSido(sidoArr);
  };

  // 레인 드롭다운내의 아이템 클릭이벤트
  const handleClickLane = text => {
    const currentLane = [...selectedLane, text];
    setSelectedLane(currentLane);
  };

  // 클릭한 레인 제거 클릭이벤트
  const handleClickRemoveSelectedLaneItem = text => {
    const targetIndex = selectedLane.indexOf(text);
    const laneArr = [...selectedLane];
    // 선택한 요소 삭제.
    laneArr.splice(targetIndex, 1);
    setSelectedLane(laneArr);
  };

  return (
    <NavBlock>
      <Dropdown text="시/도명">
        <ul>
          {sidoNameArr.map((item, i) => (
            <li key={i} onClick={() => handleClickSido(item)}>
              {item}
            </li>
          ))}
        </ul>
      </Dropdown>
      <Dropdown text="레인">
        <ul>
          {lane.map((item, i) => (
            <li key={i} onClick={() => handleClickLane(item)}>
              {item}
            </li>
          ))}
        </ul>
      </Dropdown>
      <SelectedItem>
        {selectedSido.map((item, i) => (
          <li key={i} onClick={() => handleClickRemoveSelectedSidoItem(item)}>
            {item} <span>X</span>
          </li>
        ))}

        {selectedLane.map((item, i) => (
          <li key={i} onClick={() => handleClickRemoveSelectedLaneItem(item)}>
            {item} <span>X</span>
          </li>
        ))}
      </SelectedItem>
    </NavBlock>
  );
};

export default Nav;
