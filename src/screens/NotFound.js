import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { mainColor } from '../styles';
import routes from '../routes';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col pt-72 items-center w-full h-screen">
      <FontAwesomeIcon
        icon={faQuestionCircle}
        size="5x"
        color={mainColor.fontColor}
      />
      <p className="mt-6 text-center text-lg">
        <span className="text-2xl">페이지가 존재하지 않습니다.</span>
        <br />
        링크를 잘못 입력하셨거나 페이지가 삭제/이동되었을 수 있습니다.
      </p>
      <Link to={routes.home} className="mt-8">
        메인 페이지로
      </Link>
    </div>
  );
};

export default NotFound;
