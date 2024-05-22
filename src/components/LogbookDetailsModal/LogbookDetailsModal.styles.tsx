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
  .col {
    flex-direction: column;
  }

  .icon16 {
    gap: 0.225rem;
    svg {
      width: 1rem;
      height: 1rem;
    }
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

  .table {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
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

  .main-info-carousel {
    overflow: hidden;
    padding: 0.5rem;
    border: 1px solid ${theme.grey6};
    border-radius: 1rem;
  }

  .chip-item {
    margin-bottom: 0.5rem;
  }

  .divided {
    padding-top: 0.5rem;
    margin-top: 0.5rem;
    border-top: 1px solid ${theme.grey4};
  }

  .spacer {
    display: block;
    height: 24px;
  }
`;

export const InfoContainer = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
`;

export const MainContainer = styled.div`
  display: flex !important;
  width: 100%;
  height: fit-content;

  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
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
