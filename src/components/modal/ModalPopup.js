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
    },
    content: {
      inset: '35%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      contentLabel={content}
      onRequestClose={onRequestClose}
      style={styles}
    >
      <div className="my-auto flex flex-col items-center">
        <h1 className="text-2xl">{title}</h1>
        <Content>{content}</Content>
        <div className="flex flex-row justify-between mt-8 w-full">
          <button
            className="block mt-1 mx-auto p-2 w-32  bg-blueSapphire/70 text-white rounded-xl hover:bg-cgBlue"
            onClick={() => handleClickOk()}
          >
            예
          </button>
          <button
            className="block mt-1 mx-auto p-2 w-32  bg-blueSapphire/70 text-white rounded-xl hover:bg-cgBlue"
            onClick={() => close()}
          >
            아니오
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalPopup;
