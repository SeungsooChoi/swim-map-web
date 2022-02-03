import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Clock from './Clock';

const Nav = () => {
  return (
    <nav className="flex flex-col items-center w-1/5 h-screen border-r border-solid border-r-midNightGreen">
      <Link to={routes.home} className="mt-20">
        <h1 className="text-7xl text-midNightGreen/70">Swim</h1>
      </Link>
      <Clock />
      <ul>
        {/* 홈 화면, 도표를 보여줌 */}
        <li className="mt-8 underline font-bold text-blueSapphire cursor-pointer hover:text-skyBlue">
          <Link to={routes.admin.home}>메인</Link>
        </li>

        {/* 실제 DB 목록을 보여줌 */}
        <li className="mt-8 underline font-bold text-blueSapphire cursor-pointer hover:text-skyBlue">
          <Link to={routes.admin.list}>수영장 목록</Link>
        </li>
        {/* 유저가 장소 등록한 내역을 보여줌 */}
        <li className="mt-8 underline font-bold text-blueSapphire cursor-pointer hover:text-skyBlue">
          등록 관리
        </li>

        {/* 회원 관리 (처리할 내용은 미정) */}
        <li className="mt-8 underline font-bold text-blueSapphire cursor-pointer hover:text-skyBlue">
          회원 관리
        </li>
        <li className="mt-8 underline font-bold text-blueSapphire cursor-pointer hover:text-skyBlue">
          로그아웃
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
