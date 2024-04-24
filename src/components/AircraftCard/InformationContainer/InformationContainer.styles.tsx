import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../theme/globalTheme";

type Props = {
  $innerWidth?: number;
  $offset: number;
};

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${theme.grey2};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const InformationContainer = styled.div<Props>`
  display: flex;

  width: ${(props) => props.$innerWidth}%;
  height: 100%;

  overflow: hidden;
  pointer-events: none;

  ${(props) => props.$offset && `transform: translateX(${props.$offset}px);`};
  transition: 200ms all;

  .content {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

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

  .show-info {
    opacity: 1;
    transition: 100ms all;
  }
  .hide-info {
    opacity: 0;
    transition: 100ms all;
  }
`;
