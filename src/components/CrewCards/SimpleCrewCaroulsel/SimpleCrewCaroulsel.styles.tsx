import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../theme/globalTheme";

type Props = {
  $xOffset: number;
  $width: number;
};

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  //height: 100%;
  gap: 1rem;

  position: relative;
  background-color: ${theme.lightGrey};

  h1 {
    font-size: ${theme.fontSize22};
    font-weight: ${theme.fontWeight600};
    color: ${theme.purple2};
  }

  .crew-selector-container {
    display: flex;
    flex-direction: row;

    gap: 1rem;

    width: ${(props) => props.$width}%;
    ${(props) => `transform: translateX(${props.$xOffset}px);`};
    transition: 200ms all;
  }
`;
