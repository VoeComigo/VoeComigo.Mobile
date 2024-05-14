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

  .button-area {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin-top: 1rem;
    width: 100%;

    .button-invite-type {
      width: 100%;
      height: 64px;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      border: 1px solid ${theme.primary};
      border-radius: 0.5rem;

      color: ${theme.primary};
      background-color: ${theme.lightGrey};

      box-shadow: ${theme.shadow2};

      transition: 200ms all;

      filter: brightness(0.9);

      &:active {
        filter: brightness(0.95);
      }
      svg {
        fill: ${theme.primary};
      }
    }
  }

  .selected {
    transform: scale(1.1);
    filter: brightness(1) !important;
  }

  .input-area {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;

    .text-input {
      width: 100%;
    }

    .select-input {
      width: 100%;
      color: black;
      legend {
        span {
          color: #1976d2;
          opacity: 1;
          transform: translateY(-5px);
        }
      }
    }
  }

  .button-area {
    width: 100%;
    display: flex;
    margin-bottom: 1rem;

    .primary {
      width: 100%;
      background-color: ${theme.primary};

      &:disabled {
        background-color: ${theme.grey4};
        color: ${theme.grey5};
      }
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
