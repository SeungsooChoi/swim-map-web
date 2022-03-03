import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { mainColor } from '../styles';
import routes from '../routes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 18rem;
  width: 100%;
  height: 100vh;

  .contents {
    margin-top: 1.5rem;
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.75rem;

    .note {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  .link-home {
    margin-top: 2rem;
  }
`;

const NotFound = () => {
  return (
    <Wapper>
      <FontAwesomeIcon
        icon={faQuestionCircle}
        size="5x"
        color={mainColor.fontColor}
      />
      <p className="contents">
        <span className="note">페이지가 존재하지 않습니다.</span>
        <br />
        링크를 잘못 입력하셨거나 페이지가 삭제/이동되었을 수 있습니다.
      </p>
      <Link to={routes.home} className="link-home">
        메인 페이지로
      </Link>
    </Wapper>
  );
};

export default NotFound;
