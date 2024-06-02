import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Wrapper = styled.div`
  display: flex;
  position: relative;

  width: 96px;
  height: 96px;

  justify-content: center;
  align-items: center;

  border-radius: 100%;
  border: 4px solid ${theme.grey4};

  &.hide {
    border: none;
  }
`;

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 100%;

  background-color: ${theme.primary};

  width: 100%;
  height: 100%;

  opacity: 0;
  transition: 200ms all;
  pointer-events: none;

  box-shadow: ${theme.shadow5};
  //cursor: pointer;

  &:active {
    filter: brightness(0.8);
  }

  svg {
    width: 32px;
    height: 32px;
    fill: ${theme.lightGrey};
  }

  &.show {
    opacity: 1;
    pointer-events: all;
  }
`;

type Props = {
  $barPercentage: number;
};

export const ProgressiveContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: -1px;
  left: -1px;

  width: 100%;
  height: 100%;

  transition: 200ms all;

  &.hide {
    opacity: 0;
    pointer-events: none;
  }

  .text-value {
    font-size: ${theme.fontSize18};
    color: ${theme.primary};
  }

  svg {
    width: 100%;
    height: 100%;
    overflow: visible;
    position: absolute;
    transform: rotate(270deg);
  }

  circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: ${theme.primary};
    stroke-width: 4px;
    stroke-dasharray: 288;
    stroke-dashoffset: ${(props) => (1 - props.$barPercentage / 100) * 288};
    transition: 2ms linear;
  }
`;
