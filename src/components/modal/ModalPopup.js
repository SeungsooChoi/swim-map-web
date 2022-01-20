import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.8rem;
`;

const Content = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
`;

const SButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border: 1px solid #dddddd;
  color: #80c7fa;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: #1f8cff;
  }
`;

Modal.setAppElement('#root');

const ModalPopup = ({
  isOpen,
  title,
  content,
  onRequestClose,
  close,
  handleClickOk,
}) => {
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 100,
      backgroundColor: 'rgba(0, 0 , 0, 0.75)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      inset: '30%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      contentLabel={content}
      style={styles}
      onRequestClose={onRequestClose}
    >
      <Title>{title}</Title>
      <Content>{content}</Content>
      <ButtonWrapper>
        <SButton onClick={() => handleClickOk()}>예</SButton>
        <SButton onClick={() => close()}>아니오</SButton>
      </ButtonWrapper>
    </Modal>
  );
};

export default ModalPopup;
