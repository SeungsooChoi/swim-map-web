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
  html, body {
    margin: 0;
    padding: 0;
  }
`;
