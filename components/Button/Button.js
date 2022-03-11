import styled from "styled-components";
import Link from "next/link";
export const LiveCodeBtn = styled.button`
  color: white;
  border: 1px solid white;
  background-color: transparent;
  padding: 5px 15px;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: bold;
  padding: 6px 20px 10px 20px;
  :hover {
    background-color: #f76e11;
    color: black;
    transition: 0.3s all;
    cursor: pointer;
  }
  text-decoration: none;
`;
export const SourceCodeBtn = styled(LiveCodeBtn)`
  border: none;
  :hover {
    background-color: transparent;
    color: black;
    transition: 0.3s all;
    cursor: pointer;
  }
`;
