import React from 'react';
import styled from 'styled-components';
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
    max-height: 14rem;
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

  .menu li.clicked {
    font-weight: 700;
    color: #4263eb;
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Button = styled.button`
  all: unset;
  padding: 0.625rem 1.25rem;
  border: 1px solid #495057;
  border-radius: 2rem;
  cursor: pointer;
`;

const Dropdown = ({
  title,
  contents,
  isActive,
  dropdownRef,
  onClick,
  handleClickDropdownItem,
}) => {
  return (
    <Container>
      <Button onClick={onClick}>
        <span>
          {title} {isActive ? <span>&uarr;</span> : <span>&darr;</span>}
        </span>
      </Button>
      <nav
        className={`menu ${isActive ? 'active' : 'inactive'}`}
        ref={dropdownRef}
      >
        <ul>
          {contents.map((item, i) => (
            <li
              key={i}
              className={`${item.clicked ? 'clicked' : 'notclicked'}`}
              onClick={() => handleClickDropdownItem(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Dropdown;
