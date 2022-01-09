import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { mainColor } from '../../styles';
import AuthLayout from './AuthLayout';
import BottomBox from './BottomBox';
import Button from './Button';
import Input from './Input';
import Separator from './Separator';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  z-index: 101;
`;

const LoginModal = styled.div`
  background: white;
  width: 500px;
  height: 600px;
  margin: 12rem auto;
  position: relative;

  .modal__btn--close {
    position: absolute;
    right: 0;

    .close {
      all: unset;
      padding: 1rem;
      line-height: 1rem;
      font-size: 3rem;
      cursor: pointer;
    }
  }
`;

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${mainColor.fontColor};
`;

const Login = ({ isOpen, close }) => {
  const modalEl = useRef();

  const handleClickOutside = e => {
    // 모달이 열려있을 때 X 버튼을 누르거나 외부 투명한 영역을 눌렀을 때 close
    if (isOpen && (!modalEl.current || !modalEl.current.contains(e.target))) {
      close();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <ModalWrapper>
          <LoginModal id="modal" ref={modalEl}>
            <div className="modal__btn--close">
              <button className="close" onClick={close}>
                <FontAwesomeIcon icon={faTimes} size="xs" />
              </button>
            </div>

            <AuthLayout>
              <Logo>swim</Logo>
              <form>
                <Input type="text" name="username" placeholder="username" />
                <Input type="password" name="password" placeholder="password" />
                <Button>로그인</Button>
              </form>

              <Separator />
            </AuthLayout>
            <BottomBox
              cta="가입된 계정이 없으신가요?"
              link="/sign-up"
              linkText="회원가입"
            />
          </LoginModal>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default Login;
