import { useReactiveVar } from '@apollo/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { isLoggedUser } from '../../apollo';
import routes from '../../routes';
import ModalPopup from '../modal/ModalPopup';

const SButton = styled.button`
  all: unset;
  padding: 1.025rem 1.5rem;
  cursor: pointer;
`;

const RegisterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = useReactiveVar(isLoggedUser);

  // 장소등록 버튼 클릭이벤트
  const onClick = () => {
    if (!isLoggedIn) {
      setIsOpen(true);
      return;
    }
    navigate(routes.register);
  };

  // 로그인 팝업 닫는이벤트
  const onClose = () => {
    setIsOpen(false);
  };

  // 로그인 필요 서비스 유도
  const handleClickOk = () => {
    navigate(routes.login);
  };
  return (
    <>
      <SButton onClick={onClick}>장소 등록</SButton>
      <ModalPopup
        isOpen={isOpen}
        close={onClose}
        onRequestClose={onClose}
        handleClickOk={handleClickOk}
        title="로그인이 필요한 서비스입니다."
        content="로그인하시겠습니까?"
      />
    </>
  );
};

export default RegisterButton;
