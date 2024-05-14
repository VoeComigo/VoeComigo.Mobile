import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../theme/globalTheme";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${theme.grey2};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;

  justify-content: center;

  .information-content {
    display: flex !important;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .title {
      font-size: ${theme.fontSize22};
      font-weight: ${theme.fontWeight600};
    }

    p {
      text-align: center;
      color: ${theme.purple2};
      font-size: ${theme.fontSize18};
      letter-spacing: ${theme.letterSpacing1};
    }
  }
`;
