import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const mainColor = {
  fontColor: '#7BC9E3',
  lineColor: '#5cd1f5',
};

export const elementSize = {
  navHeight: 64,
};

export const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Noto Sans KR', sans-serif;
    height: 100vh;
  }
  body {
    height: 100%;
    background: rgba(241, 243, 245, 0.5);
  }
  input {
    all: unset;
    width: 100%;
  }
  #root {
    min-height: 100%;
  }
`;
