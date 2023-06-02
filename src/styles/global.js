import { createGlobalStyle } from 'styled-components';

export const ResetCss = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      color: black;
  }
  html, body {
      overflow-x: hidden;
  }
  button {
      cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;
