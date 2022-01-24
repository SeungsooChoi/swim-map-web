import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
const Divider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`;

const Wrapper = styled.div``;

const Title = styled.h1``;

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

  return (
    <Container>
      <Title>신규 장소 추가</Title>
      <Divider>
        <Wrapper>
          <form>
            <div>
              <label htmlFor="name">장소명</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="수영장 이름을 입력해주세요."
              />
            </div>
            <div>
              <label htmlFor="position">위치</label>
              <input
                type="text"
                name="position"
                id="position"
                placeholder="임시 항목"
              />
            </div>
            <div>
              <label htmlFor="poolLength">시설현황</label>
              <input
                type="text"
                name="poolLength"
                id="poolLength"
                placeholder="임시 항목"
              />
            </div>
          </form>
        </Wrapper>
        <Wrapper>장소</Wrapper>
      </Divider>
    </Container>
  );
};

export default Register;
