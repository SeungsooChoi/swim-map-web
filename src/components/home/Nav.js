import React from 'react';
import styled from 'styled-components';

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
  renderChecks,
  onClickRemoveSidoFilter,
  onClickRemoveLaneFilter,
}) => {
  return (
    <NavBlock>
      {renderChecks()}
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
