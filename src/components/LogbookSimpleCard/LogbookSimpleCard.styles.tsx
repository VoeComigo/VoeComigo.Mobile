import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";
import { Card } from "../Card/Card";

export const Container = styled(Card)`
  width: 100%;
  position: relative;
  height: fit-content;

  p {
    width: 100%;
    color: ${theme.purple2};
    font-size: ${theme.fontSize14};
  }

  .fs12 {
    font-size: ${theme.fontSize12};
  }
  .fs16 {
    font-size: ${theme.fontSize16};
  }

  .bold {
    font-weight: ${theme.fontWeight600};
  }

  .logo {
    position: absolute;
    object-fit: contain;
    opacity: 0.05;

    width: 100px;
    height: 100px;

    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }

  .primary {
    width: 100%;
    background-color: ${theme.primary};

    &:disabled {
      background-color: ${theme.grey4};
      color: ${theme.grey5};
    }
  }
  .bottom-area {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-top: 1px solid ${theme.grey};
    margin-top: 1rem;
    padding-top: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  //gap: 0.5rem;
  width: 100%;

  svg {
    width: 18px;
    height: 18px;
    fill: ${theme.lightGrey};
  }

  span {
    width: 100%;
  }

  .icon-row {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
  }

  .green-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: ${theme.green2};
    width: 24px;
    height: 24px;
    min-height: 24px;
    min-width: 24px;
  }

  .grey-icon {
    margin-left: 3px;
    width: fit-content;
    svg {
      fill: ${theme.grey3};
    }
  }

  .yellow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: ${theme.yellow2};
    width: 24px;
    height: 24px;
    min-height: 24px;
    min-width: 24px;
  }
`;
