import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { sigungu } from '../../lib/sigunguCode';
import { commonStyle } from '../../styles';

const Container = styled.div`
  position: relative;

  .menu {
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 3rem;
    left: 0;
    width: 5.7rem;
    box-shadow: ${commonStyle.boxShadow};
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    height: 14rem;
    overflow-y: scroll;
    border: 1px solid #495057;
    border-radius: 0.3rem;
    box-shadow: ${commonStyle.boxShadow};
  }

  .menu li {
    padding: 0.8rem 1rem;
    border-bottom: 1px solid #dddddd;
    cursor: pointer;
    :hover {
      cursor: pointer;
      background: #f1f3f5;
    }
  }
`;

const Button = styled.button`
  all: unset;
  padding: 0.625rem 1.25rem;
  border: 1px solid #495057;
  border-radius: 2rem;
  cursor: pointer;
`;

const Dropdown = ({ handleClickSido }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const sidoNameArr = sigungu.map(item => Object.keys(item));

  return (
    <Container>
      <Button onClick={onClick}>
        <span>
          시군구 {isActive ? <span>&uarr;</span> : <span>&darr;</span>}
        </span>
      </Button>
      <nav
        className={`menu ${isActive ? 'active' : 'inactive'}`}
        ref={dropdownRef}
      >
        <ul>
          {sidoNameArr.map((item, i) => (
            <li key={i} onClick={() => handleClickSido(item)}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Dropdown;
