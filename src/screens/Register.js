import React, { useState } from 'react';
import Input from '../components/Input';
import BottomBox from '../components/user/BottomBox';
import routes from '../routes';
import Button from '../components/user/Button';
import RadioButton from '../components/RadioButton';

const Register = () => {
  // Todo
  // 1. 위치정보 등록화면 폼 작성
  // 2. 주소에 대한 부분은 주소검색 또는 지도에서 직접 설정할 수 있도록 해야한다고 가정
  //      2-1. 주소검색 API 찾아보기
  //      2-2. 직접 설정하는경우는 API문서 읽어봐야 함

  // 받아야 할 데이터
  // 1. 장소명 (필수)
  // 2. 위치 (필수)
  // 3. 레인 몇 m 인지
  // 4. 레인 개수 / 입력
  //     >>  레인 개수를 다양하게 설정해서 성인용 풀, 어린이용 풀을 구분하여 설정할지 ?
  //     >>  DB 컬럼 수정이 필요해짐.
  // 5. 전화번호
  // 6. 홈페이지
  // 7. 운영시간
  // 8. 기타
  const [address, setAddress] = useState('');
  const { daum } = window;

  const handleAddressClick = () => {
    new daum.Postcode({
      oncomplete: function (data) {
        let fullAddress = data.address;

        setAddress(fullAddress);
      },
    }).open();
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl">신규 장소 추가</h1>
      {/* input 요소들이 들어갈 공간 */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center mt-10 mb-4 w-96"
      >
        <Input
          text="장소명"
          type="text"
          name="name"
          id="name"
          placeholder="수영장 이름을 입력해주세요."
          required={true}
        />
        {/* 위치 주소검색의 경우 공용 Input 컴포넌트 사용이 애매함 */}
        <label className="block mb-4 w-full relative">
          <span className="font-medium text-slate-700">위치</span>
          <span className="ml-1 text-red-600">(필수)</span>
          <input
            type="button"
            name="address"
            onClick={handleAddressClick}
            value={address}
            className="block mt-3 px-3 py-2 w-full border border-slate-400 rounded-md shadow-sm cursor-pointer text-left"
          />
          <span className="absolute top-7 right-4 text-2xl text-slate-500 cursor-pointer">
            &gt;
          </span>
        </label>
        <Input
          text="상세주소"
          type="text"
          name="detailAddress"
          id="detailAddress"
          placeholder="상세정보를 입력하세요. (예: 동, 층, 호)"
        />
        <RadioButton textArr={['25m', '50m', '기타']} required />
        <Button type="submit">등록</Button>
      </form>
      <BottomBox cta="" link={routes.home} linkText="처음 화면으로" />
    </div>
  );
};

export default Register;
