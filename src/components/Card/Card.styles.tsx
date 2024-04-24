import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: ${theme.lightGrey};
  box-shadow: ${theme.shadow2};
`;
