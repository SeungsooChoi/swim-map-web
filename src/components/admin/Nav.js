import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Clock from '../../components/admin/Clock';
import { userLogOut } from '../../apollo';
import styled from 'styled-components';

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

    .link-menu {
      all: unset;
      display: inline-block;
      padding: 1rem;
      cursor: pointer;
    }

    .button-logout {
      all: unset;
      text-decoration-line: underline;
    }
  }
`;

const Nav = () => {
  const handleClickLogout = () => {
    userLogOut();
  };
  return (
    <Navigation>
      <Link to={routes.home} className="link-main">
        <h1>Swim</h1>
      </Link>
      <Clock />
      <MenuList>
        {/* 서비스 메인으로 */}
        <li>
          <Link to={routes.home} className="link-menu">
            서비스 메인으로
          </Link>
        </li>
        {/* 홈 화면, 도표를 보여줌 */}
        <li>
          <Link to={routes.dashboard} className="link-menu">
            대시보드
          </Link>
        </li>

        {/* 실제 DB 목록을 보여줌 */}
        <li>
          <Link to={routes.list} className="link-menu">
            수영장 목록
          </Link>
        </li>
        {/* 유저가 장소 등록한 내역을 보여줌 */}
        <li>
          <Link to={routes.poolManagement} className="link-menu">
            등록 관리
          </Link>
        </li>

        {/* 회원 관리 (처리할 내용은 미정) */}
        <li>
          <Link to={routes.userManagement} className="link-menu">
            회원 관리
          </Link>
        </li>
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
