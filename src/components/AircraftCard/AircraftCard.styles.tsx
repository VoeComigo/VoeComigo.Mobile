import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .primary {
    background-color: ${theme.primary};
    font-size: ${theme.fontSize18};
  }
`;
