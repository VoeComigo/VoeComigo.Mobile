import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  height: fit-content;

  p {
    width: fit-content;
    color: ${theme.purple2};
    font-size: ${theme.fontSize14};
  }

  .flex {
    display: flex;
  }
  .center {
    align-items: center;
    justify-content: center;
  }

  .fs12 {
    font-size: ${theme.fontSize12};
  }
  .fs14 {
    font-size: ${theme.fontSize14};
  }
  .fs16 {
    font-size: ${theme.fontSize16};
  }

  .bold {
    font-weight: ${theme.fontWeight600};
  }

  .text-centered {
    width: 100%;
    text-align: center;
  }

  .logo {
    position: absolute;
    object-fit: contain;
    opacity: 0.05;

    width: 100px;
    height: 100px;

    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }

  .primary {
    width: 100%;
    background-color: ${theme.primary};

    &:disabled {
      background-color: ${theme.grey4};
      color: ${theme.grey5};
    }
  }
  .bottom-area {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-top: 1px solid ${theme.grey};
    margin-top: 1rem;
    padding-top: 0.5rem;
  }
`;

export const InfoContainer = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid ${theme.grey};
  padding: 0.225rem;
  border-radius: 0.5rem;
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
`;
export const Spinner = styled.span`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  border-top: 4px solid ${theme.primary};
  border-left: 4px solid ${theme.primary};
  border-right: 4px solid ${theme.primary};
  border-bottom: 4px solid transparent;

  animation: spin 800ms linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
