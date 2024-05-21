import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

type Props = {
  $titleSize?: string;
  $textSize?: string;
};
export const Container = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 90%;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${theme.grey2};
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
      font-size: ${(props) =>
        props.$titleSize ? props.$titleSize + "px" : theme.fontSize22};
      font-weight: ${theme.fontWeight600};
    }

    p {
      text-align: center;
      width: 100%;
      color: ${theme.purple2};
      font-size: ${(props) =>
        props.$textSize ? props.$textSize + "px" : theme.fontSize18};
      letter-spacing: ${theme.letterSpacing1};
    }
  }
`;
