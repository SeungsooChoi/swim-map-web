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
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
`;
