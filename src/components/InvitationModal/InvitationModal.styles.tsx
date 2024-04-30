import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  overflow: hidden;

  h1 {
    font-size: ${theme.fontSize32};
    font-weight: ${theme.fontWeight600};
  }
`;
