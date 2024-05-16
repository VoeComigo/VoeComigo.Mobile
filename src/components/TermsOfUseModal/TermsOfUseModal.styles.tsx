import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .purple {
    color: ${theme.purple2};
  }
  .bold {
    font-weight: ${theme.fontWeight600};
  }
  .fs14 {
    font-size: ${theme.fontSize14};
  }
  .fs28 {
    font-size: ${theme.fontSize28};
  }

  .title-area {
    width: 100%;
    border-bottom: 1px solid ${theme.grey4};
    padding-bottom: 0.5rem;
  }

  .bottom-area {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-top: 1px solid ${theme.grey4};
    padding-top: 0.5rem;
  }

  .input-area {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    .text-input {
      width: 100%;
    }
  }

  .primary {
    width: 100%;
    background-color: ${theme.primary};

    &:disabled {
      background-color: ${theme.grey4};
      color: ${theme.grey5};
    }
  }

  .term-of-use-container {
    height: 350px;
    overflow: auto;
    scroll-behavior: smooth;

    .term-text {
      font-size: ${theme.fontSize12};
      color: ${theme.purple2};
    }
  }
`;
