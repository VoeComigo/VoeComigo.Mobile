import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../theme/globalTheme";

export const Container = styled.div`
  display: inline-flex;
  gap: 1rem;
  transform: translateX(0);
  transition: 200ms all;

  background-color: ${theme.lightGrey};

  h1 {
    font-size: ${theme.fontSize22};
    font-weight: ${theme.fontWeight600};
    color: ${theme.purple2};
  }
`;
