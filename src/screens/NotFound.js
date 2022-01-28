import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { mainColor } from '../styles';

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
    </div>
  );
};

export default NotFound;
