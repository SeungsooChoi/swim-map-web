import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mainColor } from '../../styles';

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

const ModalContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 5rem 2rem 5rem;
  form {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${mainColor.fontColor};
`;

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  background-color: #fafafa;
  border: 0.5px solid rgb(219, 219, 219);
  border-radius: 0.25rem;
  box-sizing: border-box;
  font-size: 1.25rem;
  &::placeholder {
    font-size: 1.25rem;
  }
`;

const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 0;
  width: 100%;
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #0095f6;
  color: white;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;

const Separator = styled.div`
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  div {
    width: 100%;
    height: 1px;
    background-color: rgb(219, 219, 219);
  }
  span {
    margin: 0px 10px;
    font-weight: 600;
    color: #8e8e8e;
  }
`;

const SignInContent = styled.div`
  text-align: center;
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

            <ModalContents>
              <Logo>swim</Logo>
              <form>
                <Input type="text" name="username" placeholder="username" />
                <Input type="password" name="password" placeholder="password" />
                <Button>로그인</Button>
              </form>

              <Separator>
                <div></div>
                <span>Or</span>
                <div></div>
              </Separator>
            </ModalContents>
            <SignInContent>
              <span>가입된 계정이 없으신가요?</span>{' '}
              <Link to="/sign-up">회원가입</Link>
            </SignInContent>
          </LoginModal>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default Login;
