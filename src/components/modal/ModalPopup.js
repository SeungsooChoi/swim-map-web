import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 1.5rem /* 24px */;
    line-height: 2rem /* 32px */;
  }

  .content {
    margin-top: 2rem /* 32px */;
    font-size: 1.5rem /* 24px */;
    line-height: 2rem /* 32px */;
  }

  .buttonWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
    width: 100%;

    button {
      all: unset;
      display: block;
      margin: 0.25rem auto 0 auto;
      padding: 0.5rem;
      width: 8rem /* 128px */;
      border-radius: 0.75rem /* 12px */;
      cursor: pointer;
      text-align: center;
      background: #74c0fc;
      color: white;
      box-sizing: border-box;

      :hover {
        background: #4dabf7;
      }
    }

    button.no {
      background: #ced4da;

      :hover {
        background: #adb5bd;
      }
    }
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
      <ModalWrapper>
        <h1 className="title">{title}</h1>
        <p className="content">{content}</p>
        <div className="buttonWrapper">
          <button onClick={() => handleClickOk()}>예</button>
          <button className="no" onClick={() => close()}>
            아니오
          </button>
        </div>
      </ModalWrapper>
    </Modal>
  );
};

export default ModalPopup;
