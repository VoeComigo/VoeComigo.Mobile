import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  background-color: #0000007a;
  backdrop-filter: blur(5px);
  z-index: 1000;
  padding: 1.5rem;
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

type Props = {
  $contentStyle: "normal" | "ticket" | "bottom";
};

export const Content = styled.div<Props>`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  //height: 100%;

  background-color: ${theme.lightGrey};
  border-radius: 1rem;
  overflow: hidden;

  padding: 1rem;

  ${(props) =>
    props.$contentStyle === "ticket" &&
    `
    mask: radial-gradient(circle at center left, transparent 32px, black 0px) left,
    radial-gradient(circle at center right, transparent 32px, black 0px) right;
    mask-size: 52%;
    mask-repeat: no-repeat;

    &::after {
        content: "";
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        height: 2px;
        width: 100%;
        border: 2px dashed #c8c8c8;
    }
  `}

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

export const BottomModalContent = styled.div`
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
