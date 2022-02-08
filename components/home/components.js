import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Link from "next/link";

export const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Name = styled.h1`
  color: #f76e11;
  font-weight: bold;
  font-size: 60px;
  font-family: "Ubuntu", sans-serif;
  margin-top: 2rem;
`;
export const IntroContainer = styled.div`
  min-width: 768px;
  height: 60%;
  display: flex;
  flex-direction: row;
`;
export const DescContainer = styled.div`
  width: 70%;
  height: 100%;
  // border: 1px solid white;
`;
export const Description = styled.p`
  color: black;
  font-size: 30px;
  font-family: "Lato", sans-serif;
  line-height: 1.4;
`;
export const LinksContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const WebsitesLink = styled.a`
  color: black;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
`;
export const SeeMoreBtn = styled.button`
  color: #f76e11;
  background-color: white;
  font-family: "Lato", sans-serif;
  font-size: 30px;
  font-weight: bold;
  border: 1px solid #f76e11;
  padding: 6px 20px 10px 20px;
  :hover {
    background-color: #f76e11;
    color: white;
    transition: 0.3s all;
  }
`;
