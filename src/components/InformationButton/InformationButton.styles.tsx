import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

type Props = {
  $gradient: {
    initialColor: string;
    endColor: string;
  };
};

export const InfoButton = styled.button<Props>`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 100%;
  padding: 1rem;
  overflow: hidden;

  cursor: pointer;
  transition: 200ms all;

  ${(props) =>
    props.$gradient &&
    `background-image: linear-gradient(${props.$gradient.initialColor}, ${props.$gradient.endColor});`};
  border-radius: 1rem;
  box-shadow: ${theme.shadownMid};

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }

  .information-container {
    width: 100%;
    text-align: left;

    h1,
    p {
      color: ${theme.lightGrey};
    }

    h1 {
      font-size: ${theme.fontSize32};
      font-weight: ${theme.fontWeight600};
    }
    p {
      font-size: ${theme.fontSize16};
    }
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    svg {
      fill: ${theme.lightGrey};
      pointer-events: none;
      width: 96px;
      height: 96px;
    }
  }
`;
