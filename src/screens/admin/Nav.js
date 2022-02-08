import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Clock from '../../components/admin/Clock';

const Nav = () => {
  return (
    <nav className="flex flex-col items-center w-1/4 h-screen border-r border-solid border-r-midNightGreen">
      <Link to={routes.home} className="mt-20">
        <h1 className="text-7xl text-midNightGreen/70">Swim</h1>
      </Link>
      <Clock />
      <ul>
        {/* 홈 화면, 도표를 보여줌 */}
        <li className="mt-8 underline font-bold text-blueSapphire cursor-pointer hover:text-skyBlue">
          <Link to={routes.dashboard}>대시보드</Link>
        </li>

        {/* 실제 DB 목록을 보여줌 */}
        <li className="mt-8 underline font-bold text-blueSapphire cursor-pointer hover:text-skyBlue">
          <Link to={routes.list}>수영장 목록</Link>
        </li>
        {/* 유저가 장소 등록한 내역을 보여줌 */}
        <li className="mt-8 underline font-bold text-blueSapphire cursor-pointer hover:text-skyBlue">
          <Link to={routes.poolManagement}>등록 관리</Link>
        </li>

        {/* 회원 관리 (처리할 내용은 미정) */}
        <li className="mt-8 underline font-bold text-blueSapphire cursor-pointer hover:text-skyBlue">
          <Link to={routes.userManagement}>회원 관리</Link>
        </li>
        <li className="mt-8 underline font-bold text-blueSapphire cursor-pointer hover:text-skyBlue">
          로그아웃
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
