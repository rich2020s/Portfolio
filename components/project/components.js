import styled from "styled-components";
import { MEDIA_QUERY } from "../../constant/mediaQuery";
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
  min-height: 300px;
  color: white;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  :last-child {
    margin-bottom: 150px;
  }
  ${MEDIA_QUERY.md} {
    width: 100%;
    padding: 0 20px;
  }
  ${MEDIA_QUERY.sm} {
    // flex-direction: row;
  }
`;

export const ProjName = styled(Title)`
  font-size: 48px;
  margin-bottom: 20px;
`;
export const ProjDesc = styled.p`
  color: white;
  margin: 0;
  font-size: 30px;
  max-width: 60%;
  font-family: "Lato", sans-serif;
  line-height: 1.4;
  ${MEDIA_QUERY.sm} {
    max-width: 100%;
  }
`;
export const ProjContent = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${MEDIA_QUERY.sm} {
    flex-direction: column;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  maxwidth: 100%;
  height: 100%;
  align-items: center;
  ${MEDIA_QUERY.sm} {
    margin-top: 100px;
  }
`;
