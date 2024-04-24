import styled from "styled-components";
//import { voeComigoTheme as theme } from "../../theme/globalTheme";

type Props = {
  $offsetX: number;
  $width: number;
};

export const Content = styled.div<Props>`
  display: flex;
  height: 100%;
  width: ${(props) => `${props.$width}%;`};

  justify-content: center;
  align-items: center;
  position: relative;

  gap: 1rem;

  ${(props) => props.$offsetX && `transform: translateX(${props.$offsetX}px);`};
  transition: 200ms all;
`;
