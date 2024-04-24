import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

type Props = {
  $isOpen: boolean;
};

export const Card = styled.div<Props>`
  display: flex;
  flex-direction: column;

  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: ${theme.lightGrey};
  box-shadow: ${theme.shadow2};

  .accordion-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.purple2};
    font-size: ${theme.fontSize18};
    background-color: transparent;
    transition: 200ms all;

    .arrow-icon {
      fill: ${theme.purple2};
      width: 24px;
      height: 24px;
      border-radius: 100%;
      background-color: ${theme.lightGrey};
      transition: 200ms all;

      ${(props) =>
        props.$isOpen
          ? "transform: rotate(0deg);"
          : "transform: rotate(180deg);"}
    }

    &:active > .arrow-icon {
      filter: brightness(0.9);
    }
  }
  //  Accordion content:
  .closed {
    opacity: 0;
    max-height: 0;
    //line-height: 0;
    transition: 200ms all;
    pointer-events: none;
  }

  .open {
    opacity: 1;
    max-height: 3000px;
    transition: 200ms all;
    border-top: 1px solid ${theme.grey};
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-top: 0.5rem;
  }
`;
