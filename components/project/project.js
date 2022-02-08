import styled from "styled-components";
import { Name } from "../home";

export const ProjWrapper = styled.div`
  background-color: #0070f352;
  background-image: linear-gradient(135deg, #f76e11, #fda367bf);
  color: white;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled(Name)`
  color: white;
`;
export const ProjContainer = styled.div`
  width: 80%;
  height: 400px;
  color: white;
`;
export const ProjName = styled(Title)`
  font-size: 48px;
`;
export const ProjDesc = styled.p`
  color: white;
  font-size: 30px;
  font-family: "Lato", sans-serif;
  line-height: 1.4;
`;
