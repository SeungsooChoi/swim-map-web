import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const Nav = () => {
  return (
    <nav className="w-1/5 h-screen border-r border-solid border-r-midNightGreen">
      <Link to={routes.admin.home} className="mt-20">
        <h1 className="text-7xl text-midNightGreen/70">Swim</h1>
      </Link>
      <div>
        <span>현재 날짜와 시각</span>
      </div>
      <ul>
        <li>
          <Link to={routes.admin.list}>수영장 목록</Link>
        </li>
        <li>등록 관리</li>
        <li>회원 관리</li>
        <li>로그아웃</li>
      </ul>
    </nav>
  );
};

export default Nav;
