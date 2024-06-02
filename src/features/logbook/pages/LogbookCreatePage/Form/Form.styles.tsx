import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../../../theme/globalTheme";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .primary {
    width: 100%;
    margin-top: 0.5rem;
    background-color: ${theme.primary};

    &:disabled {
      background-color: ${theme.grey4};
      color: ${theme.grey5};
    }
  }

  .modal-title-area {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    width: 100%;

    .title {
      font-size: ${theme.fontSize22};
      font-weight: ${theme.fontWeight600};
      color: ${theme.purple};
    }
    .subtitle {
      font-size: ${theme.fontSize16};
      color: ${theme.purple};
    }
  }
`;
