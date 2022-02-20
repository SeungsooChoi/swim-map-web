import React, { useState } from 'react';
import styled from 'styled-components';
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

  const handleClickSido = text => {
    const currentSido = [...selectedSido, text];
    setSelectedSido(currentSido);
  };

  const handleClickSidoItem = text => {
    const targetIndex = selectedSido.indexOf(text);
    const sidoArr = [...selectedSido];
    // 선택한 요소 삭제.
    sidoArr.splice(targetIndex, 1);
    setSelectedSido(sidoArr);
  };

  return (
    <NavBlock>
      <Dropdown handleClickSido={handleClickSido} />
      <SelectedItem>
        {selectedSido.map((item, i) => (
          <li key={i} onClick={() => handleClickSidoItem(item)}>
            {item} <span>X</span>
          </li>
        ))}
      </SelectedItem>
    </NavBlock>
  );
};

export default Nav;
