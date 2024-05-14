import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-shrink: 0;

  .primary {
    background-color: ${theme.primary};
    font-size: ${theme.fontSize18};
  }
`;
