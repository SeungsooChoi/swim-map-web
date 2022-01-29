import React, { useState } from 'react';
import Input from '../components/user/Input';
import DaumPostCode from 'react-daum-postcode';
import BottomBox from '../components/user/BottomBox';
import routes from '../routes';

const postCodeStyles = {
  width: '20rem',
  height: '30rem',
};

const Register = () => {
  // Todo
  // 1. 위치정보 등록화면 폼 작성
  // 2. 주소에 대한 부분은 주소검색 또는 지도에서 직접 설정할 수 있도록 해야한다고 가정
  //      2-1. 주소검색 API 찾아보기
  //      2-2. 직접 설정하는경우는 API문서 읽어봐야 함
  // 3. 라우터 설정하여 둘다 탭으로 자유롭게 볼수있게

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
  const [active, setActive] = useState(false);

  const searchAddrClick = e => {
    e.preventDefault();
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>신규 장소 추가</h1>
      <div className="flex flex-row justify-center mt-4 w-full">
        {/* input 요소들이 들어갈 공간 */}
        <div>
          <form className="mt-10">
            <Input
              text="장소명"
              type="text"
              name="name"
              id="name"
              placeholder="수영장 이름을 입력해주세요."
            />
            {/* <Input
              text="위치"
              type="text"
              name="position"
              id="position"
              placeholder="임시 항목"
            /> */}

            <label className="block mb-4 w-full">
              <span className="block font-medium text-slate-700">위치</span>
              <button
                onClick={searchAddrClick}
                className="block mt-3 px-3 py-2 w-full border border-slate-400 rounded-md shadow-sm"
              >
                &gt;
              </button>
            </label>
            <Input
              text="수영장 정보"
              type="text"
              name="poolLength"
              id="poolLength"
              placeholder="임시 항목"
            />
          </form>
        </div>
        {/* 장소 위치 추가시 map 객체가 들어갈 공간 */}
        <div className={`${active ? `w-3/12` : `w-0`} overflow-hidden`}>
          <DaumPostCode />
        </div>
      </div>
      <BottomBox cta="" link={routes.home} linkText="처음 화면으로" />
    </div>
  );
};

export default Register;
