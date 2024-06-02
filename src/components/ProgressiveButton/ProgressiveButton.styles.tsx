import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

type Props = {
  $iconColor: string;
  $barColor: string;
  $barPercentage: string;
};
export const Button = styled.button<Props>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  width: 160px;
  height: 210px;

  padding: 1rem;

  border-radius: 0.5rem;
  border: 1px solid ${theme.grey4};

  background-color: ${theme.lightGrey};
  box-shadow: ${theme.shadow5};

  transition: 200ms all;
  //cursor: pointer;

  &:active {
    filter: brightness(0.9);
  }

  .title {
    text-align: center;
    font-size: ${theme.fontSize18};
    color: ${theme.purple2};
  }

  .icon-area {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;

    border-radius: 100%;
    //border: 1px solid ${theme.grey4};

    background-color: ${theme.lightGrey};
    box-shadow: ${theme.shadow6};

    svg {
      width: 32px;
      height: 32px;
      fill: ${(props) => props.$iconColor};
    }
  }

  .label {
    font-size: ${theme.fontSize12};
    color: ${theme.grey3};
  }

  .progress-bar-container {
    display: flex;
    flex-direction: column;
    gap: 0.225rem;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .bar {
    display: flex;
    border-radius: 0.5rem;

    background-color: ${theme.grey3};

    width: 100%;
    height: 8px;

    &::before {
      content: "";
      width: ${(props) => props.$barPercentage};
      background-color: ${(props) => props.$barColor};
      border-radius: 0.5rem;
    }
  }
`;
