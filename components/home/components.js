import styled from "styled-components";
import { MEDIA_QUERY } from "../../constant/mediaQuery.js";
export const MeSection = styled.div`
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
  height: 60%;
  min-width: 768px;
  display: flex;
  flex-direction: row;
  ${MEDIA_QUERY.md} {
    min-width: 480px;
    min-width: 100%;
  }
  ${MEDIA_QUERY.sm} {
    min-width: 100%;
  }
`;
export const DescContainer = styled.div`
  width: 70%;
  height: 100%;
  padding-left: 20px;
  ${MEDIA_QUERY.md} {
    min-width: 100%;
  }
  ${MEDIA_QUERY.sm} {
    min-width: 100%;
  }
`;
export const Description = styled.p`
  display: flex;
  display: flex;
  color: black;
  font-size: 30px;
  font-family: "Lato", sans-serif;
  line-height: 1.4;
  margin-right: 0;
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
