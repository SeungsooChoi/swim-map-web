import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

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

  .close {
    float: right;
    margin-right: 1rem;
    font-size: 3rem;
    cursor: pointer;
  }
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
            <span className="close" onClick={close}>
              &times;
            </span>
          </LoginModal>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default Login;
