import { gql, useMutation } from '@apollo/client';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { userLogIn } from '../../apollo';
import useInputs from '../../hooks/useInputs';
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

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

const Login = ({ isOpen, close }) => {
  const [{ username, password }, onChange, reset] = useInputs({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState('');
  const modalEl = useRef();

  const onCompleted = data => {
    const {
      login: { ok, error, token },
    } = data;
    console.log(ok, error, token);

    if (!ok) {
      setErrors(error);
    }
    if (token) {
      userLogIn(token);
      reset();
      close();
    }
  };
  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  const handleClickOutside = e => {
    // 모달이 열려있을 때 X 버튼을 누르거나 외부 투명한 영역을 눌렀을 때 close
    if (isOpen && (!modalEl.current || !modalEl.current.contains(e.target))) {
      close();
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    if (loading) {
      return;
    }
    login({
      variables: { username, password },
    });
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
              <form onSubmit={onSubmit}>
                <Input
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={onChange}
                  value={username}
                  required
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={onChange}
                  value={password}
                  required
                />
                <Button
                  type="submit"
                  disabled={
                    username === '' ||
                    username.length > 12 ||
                    username.length < 2 ||
                    password.length < 4
                  }
                >
                  로그인
                </Button>
                {errors}
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
