import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  .invite-buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;

    .primary {
      width: 100%;
      background-color: ${theme.primary};
      font-size: ${theme.fontSize18};
    }
    .secondary {
      width: 100%;
      background-color: ${theme.white};
      color: ${theme.primary};
      box-shadow: inset 0px 0px 0px 1px ${theme.primary};
      font-size: ${theme.fontSize18};
    }
  }
`;
