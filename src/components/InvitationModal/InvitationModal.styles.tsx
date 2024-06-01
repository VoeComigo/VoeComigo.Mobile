import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;

  h1 {
    font-size: ${theme.fontSize18};
    font-weight: ${theme.fontWeight600};
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

      border: 1px solid ${theme.grey4};
      border-radius: 0.5rem;

      color: ${theme.grey4};
      background-color: ${theme.lightGrey};

      transition: 200ms all;

      svg {
        fill: ${theme.grey4};
      }

      &:active {
        filter: brightness(0.98);
      }
    }
  }

  .selected {
    transform: scale(1.05);
    border: 1px solid ${theme.primary} !important;
    color: ${theme.primary} !important;
    box-shadow: ${theme.shadow2};
    svg {
      fill: ${theme.primary} !important;
    }
  }

  .input-area {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 1.5rem;
    padding: 1rem;

    border: 1px solid ${theme.grey4};
    border-radius: 0.5rem;

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

  .submit-area {
    width: 100%;
    display: flex;
    margin-top: 1rem;
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
`;
