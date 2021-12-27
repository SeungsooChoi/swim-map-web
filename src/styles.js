import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const mainColor = {
  fontColor: '#80c7fa',
  lineColor: '#5cd1f5',
};

export const elementSize = {
  navHeight: 61,
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
  }
`;
