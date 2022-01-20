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
  .iw_inner {
    width: 400px;
    height: 200px;
    background: white;
    border: 1px solid #dddddd;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
  }

  .iw_inner::after {
    content: "";
    position: absolute;
    bottom: -18px;
    left: 50%;
    border-top: 20px solid white;
    border-right: 20px solid transparent;
  }

  .iw_inner h1 {
    font-size: 1.5rem;
    color: #333;
  }

`;
