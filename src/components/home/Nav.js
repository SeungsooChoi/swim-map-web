import React from 'react';
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

const Nav = ({
  sido,
  lane,
  onClickSidoDropdown,
  onClickLaneDropdown,
  onClickRemoveSidoFilter,
  onClickRemoveLaneFilter,
}) => {
  return (
    <NavBlock>
      <Dropdown text="시/도명">
        <ul>
          {sido.map((item, i) => (
            <li
              key={i}
              className={`${item.clicked ? 'clicked' : 'notclicked'}`}
              onClick={() => onClickSidoDropdown(item)}
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
              onClick={() => onClickLaneDropdown(item)}
            >
              {item.name}(m)
            </li>
          ))}
        </ul>
      </Dropdown>
      <SelectedItem>
        {/* 시/도 */}
        {sido.map((item, i) =>
          item.clicked ? (
            <li key={i} onClick={() => onClickRemoveSidoFilter(item)}>
              {item.name} <span>X</span>
            </li>
          ) : null,
        )}
        {/* 레인 */}
        {lane.map((item, i) =>
          item.clicked ? (
            <li key={i} onClick={() => onClickRemoveLaneFilter(item)}>
              {item.name} <span>X</span>
            </li>
          ) : null,
        )}
      </SelectedItem>
    </NavBlock>
  );
};

export default Nav;
