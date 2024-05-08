import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../theme/globalTheme";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  background-color: #0000007a;
  backdrop-filter: blur(5px);
  z-index: 1000;
  overflow: hidden;

  //    Openning handler:
  opacity: 0;
  pointer-events: none;
  transition: 200ms all;

  &.show {
    opacity: 1;
    pointer-events: all;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;

  background-color: ${theme.lightGrey};
  border-radius: 1rem 1rem 0 0;
  overflow: hidden;

  padding: 1rem;

  .close-region {
    width: 100%;
    justify-content: end;
    display: flex;

    .close-button {
      width: 24px;
      height: 24px;
      border-radius: 100%;
      background-color: ${theme.lightGrey};
      transition: 200ms all;
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
      &:active {
        filter: brightness(0.85);
      }
    }
  }
`;
