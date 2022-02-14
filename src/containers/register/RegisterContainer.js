import React, { useState } from 'react';
import Logo from '../../components/common/Logo';
import Input from '../../components/common/Input';
import RadioButton from '../../components/RadioButton';
import RegisterBlock from '../../components/register/RegisterBlock';
import BottomBox from '../../components/user/BottomBox';
import Button from '../../components/user/Button';
import routes from '../../routes';

const RegisterContainer = () => {
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
  return <RegisterBlock />;
};

export default RegisterContainer;
