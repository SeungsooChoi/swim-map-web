import React from 'react';
import styled from 'styled-components';
import routes from '../../routes';
import { commonStyle } from '../../styles';
import Input from '../common/Input';
import Checkbox from '../Checkbox';
import BottomBox from '../user/BottomBox';
import Button from '../user/Button';
import Form from '../common/Form';

const Wrapper = styled.div`
  width: 100%;
  padding-top: 1rem;

  .subTitle {
    text-align: center;
    font-size: 1.5rem;
  }

  button {
    margin-bottom: 1rem;
  }
`;

const Label = styled.label`
  position: relative;
  display: block;
  margin-bottom: 1rem;
  width: 100%;

  input {
    all: unset;
    display: block;
    margin-top: 0.75rem /* 12px */;
    padding: 0.5rem 0.75rem;
    width: 100%;
    height: 41px;
    border: 1px solid #c4c4c4;
    border-radius: 0.375rem /* 6px */;
    box-shadow: ${commonStyle.boxShadow};
    cursor: pointer;
    box-sizing: border-box;
  }

  .gt {
    position: absolute;
    top: 2rem;
    right: 1rem /* 16px */;
    font-size: 1.5rem /* 24px */;
    line-height: 2rem /* 32px */;
    cursor: pointer;
  }
`;

const RegisterBlock = ({
  name,
  address,
  setAddress,
  detailAddress,
  onChange,
  onSubmit,
  checkedList,
  setCheckedLists,
}) => {
  const laneDataList = [
    { id: 1, data: '25m' },
    { id: 2, data: '50m' },
    { id: 3, data: '기타' },
  ];
  const { daum } = window;

  const handleAddressClick = () => {
    new daum.Postcode({
      oncomplete: function (data) {
        let fullAddress = data.address;
        setAddress(fullAddress);
      },
    }).open();
  };

  return (
    <Wrapper>
      <h1 className="subTitle">신규 장소 추가</h1>
      {/* input 요소들이 들어갈 공간 */}
      <Form onSubmit={onSubmit}>
        <Input
          text="장소명"
          type="text"
          name="name"
          id="name"
          placeholder="수영장 이름을 입력해주세요."
          onChange={onChange}
          value={name}
          required
        />
        {/* 위치 주소검색의 경우 공용 Input 컴포넌트 사용이 애매함 */}
        <Label>
          <span>위치</span>
          <span className="isRequired">(필수)</span>
          <input
            type="button"
            name="address"
            onClick={handleAddressClick}
            value={address}
            required
          />
          <span className="gt">&gt;</span>
        </Label>
        <Input
          text="상세주소"
          type="text"
          name="detailAddress"
          id="detailAddress"
          onChange={onChange}
          value={detailAddress}
          placeholder="상세정보를 입력하세요. (예: 동, 층, 호)"
        />
        <Checkbox
          dataList={laneDataList}
          checkedList={checkedList}
          setCheckedLists={setCheckedLists}
          required
        />
        <Button type="submit">등록</Button>
      </Form>
      <BottomBox cta="" link={routes.home} linkText="처음 화면으로" />
    </Wrapper>
  );
};

export default RegisterBlock;
