import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Clock from '../../components/admin/Clock';
import { userLogOut } from '../../apollo';
import styled from 'styled-components';
import NavLinkItem from './NavLinkItem';

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 100vh;
  border-right: 1px solid #c4c4c4;
  font-weight: 700;

  .link-main {
    all: unset;
    margin-top: 5rem;
    margin-bottom: 2rem;
    cursor: pointer;

    h1 {
      font-size: 4.5rem;
      line-height: 1;
    }
  }
`;

const MenuList = styled.ul`
  li {
    margin-top: 2rem;
    text-align: center;

    .clicked {
      background: #dee2e6;
      border-radius: 2rem;
    }

    .button-logout {
      all: unset;
      text-decoration-line: underline;
      padding: 1rem;
      cursor: pointer;
    }
  }
`;

const Nav = () => {
  const [menu, setMenu] = useState([
    { id: 1, text: '서비스 메인으로', to: routes.home, clicked: false },
    { id: 2, text: '대시보드', to: routes.dashboard, clicked: true },
    { id: 3, text: '수영장 목록', to: routes.list, clicked: false },
    { id: 4, text: '등록 관리', to: routes.poolManagement, clicked: false },
    { id: 5, text: '회원 관리', to: routes.userManagement, clicked: false },
  ]);
  const handleClickLogout = () => {
    userLogOut();
  };

  const onClick = e => {
    const {
      target: { id },
    } = e;
    let newMenu = [...menu];
    newMenu.forEach(menu => {
      if (menu.id === Number(id)) {
        menu.clicked = true;
      } else {
        menu.clicked = false;
      }
    });
    setMenu(newMenu);
  };

  return (
    <Navigation>
      <Link to={routes.home} className="link-main">
        <h1>Swim</h1>
      </Link>
      <Clock />
      <MenuList>
        {menu.map((item, index) => (
          <li key={index}>
            <NavLinkItem
              id={item.id}
              to={item.to}
              clicked={item.clicked}
              onClick={onClick}
            >
              {item.text}
            </NavLinkItem>
          </li>
        ))}
        <li>
          <button className="button-logout" onClick={handleClickLogout}>
            로그아웃
          </button>
        </li>
      </MenuList>
    </Navigation>
  );
};

export default Nav;
