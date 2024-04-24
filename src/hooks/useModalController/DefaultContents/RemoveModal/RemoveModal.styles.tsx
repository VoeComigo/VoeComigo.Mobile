import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../../theme/globalTheme";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .title {
    font-size: ${theme.fontSize18};
    color: ${theme.purple};
    text-wrap: balance;
    text-align: center;
  }
  .red-button {
    background-color: ${theme.red3};
    width: 100%;
    color: ${theme.lightGrey};
    margin-bottom: 0.5rem;
  }
  .secondary-button {
    margin-top: 1rem;
    border: 1px solid ${theme.primary};
    width: 100%;
    color: ${theme.primary};
  }
`;
