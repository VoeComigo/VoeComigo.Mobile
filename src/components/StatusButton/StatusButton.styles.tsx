import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${theme.lightGrey};
  width: 100%;

  padding: 1rem 0;

  border-bottom: 1px solid ${theme.grey};

  transition: 200ms all;

  &:active {
    filter: brightness(0.9);
  }

  .main-label {
    font-size: ${theme.fontSize16};
    font-weight: ${theme.fontWeight600};
    color: ${theme.purple};
  }

  .status-label {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    .text-info {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-size: ${theme.fontSize16};
      color: ${theme.purple};
      svg {
        width: 16px;
        height: 16px;
        fill: ${theme.info};
      }
    }
  }
`;
