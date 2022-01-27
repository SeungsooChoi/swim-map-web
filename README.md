# Swim-map

수영장 정보(레인 길이, 위치 등..)를 등록하고 조회할 수 있는 서비스

## 사용 기술

<div align=center>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/react-61DAFB?logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/React Router-CA4245?logo=React Router&logoColor=black">
  <img src="https://img.shields.io/badge/fontawesome-339AF0?logo=fontawesome&logoColor=white">
  <img src="https://img.shields.io/badge/GraphQL-E10098?logo=GraphQL&logoColor=white">
  <img src="https://img.shields.io/badge/Apollo GraphQL-311C87?logo=Apollo GraphQL&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/Redux-764ABC?logo=Redux&logoColor=white">
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?logo=Tailwind CSS&logoColor=white">
</div>

## 장소 안내

![info](https://user-images.githubusercontent.com/34928445/151295924-d6d65dbd-e8b8-4813-9ca0-015a0788df4a.gif)

## 장소 검색

![search](https://user-images.githubusercontent.com/34928445/151296040-3b22cbff-3382-4d0e-91d7-e01b57a9553d.gif)

<!-- ## 장소 등록(로그인 필요)

진행중 -->

## 컴포넌트 구조

화면

- App
  - Home
    - NavigationBar
    - PoolList
    - PoolListItem
    - MapView
  - Login
  - SignUp
  - NotFound

## Todo

- [x] 지도 표현
- [x] 수영장 리스트 표현
- [x] 지도에 수영장 리스트 마커, 정보 창 적용
- [x] 검색기능 (자동완성 선택시 해당 마커로 지도 이동, 정보 창 오픈)
- [x] 로그인 구현
- [x] 회원가입 구현
- [ ] 장소등록 구현
- [ ] 관리자 페이지 구현(따로 레포지토리 사용 예정)
