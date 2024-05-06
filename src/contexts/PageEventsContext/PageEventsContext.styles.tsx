import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  width: 100%;
  height: 100%;
  padding: 3.5rem 1.5rem;
`;

export const LoaderWrapper = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;

  background-color: #0000007a;
  backdrop-filter: blur(5px);

  row-gap: 0.5rem;

  width: 100%;
  height: 100%;
  z-index: 1000;

  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  transition: 300ms all;

  img {
    object-fit: contain;
    filter: drop-shadow(0px 0px 2px #00000052);
  }

  .spinner-text {
    width: 100%;

    display: flex;
    gap: 1rem;

    align-items: center;
    justify-content: center;
  }

  .fs16 {
    font-size: ${theme.fontSize16};
  }
  .fs18 {
    font-size: ${theme.fontSize18};
  }
  .fs22 {
    font-size: ${theme.fontSize22};
  }
  .bold {
    font-weight: ${theme.fontWeight600};
  }
  .white {
    color: ${theme.lightGrey};
  }
  .centered {
    text-align: center;
  }
  .elevate {
    filter: drop-shadow(0px 1px 0px black);
  }
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

export const CuriosityArea = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  opacity: 0;

  &.show {
    animation: show 600ms linear forwards;
    opacity: 1;
  }

  &.hide {
    animation: hide 600ms linear forwards;
  }

  @keyframes show {
    from {
      transform: translateY(64px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes hide {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(64px);
      opacity: 0;
    }
  }
`;
