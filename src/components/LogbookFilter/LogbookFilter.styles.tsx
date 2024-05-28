import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  background-color: ${theme.primary};
  width: 100%;
  height: fit-content;
  /* display: inline-flex; */
  /* margin-top: 3rem; */
  z-index: 2;
  left: 0;
  top: 62px;
  gap: 0.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  padding: 0.5rem;
  box-shadow: -1px 2px 4px 0px #00000038;

  .filter-button {
    flex-shrink: 0;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  .primary {
    width: 100%;
    background-color: ${theme.primary};

    &:disabled {
      background-color: ${theme.grey4};
      color: ${theme.grey5};
    }
  }
`;
