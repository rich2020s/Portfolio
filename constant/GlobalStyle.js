import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
}
`;
