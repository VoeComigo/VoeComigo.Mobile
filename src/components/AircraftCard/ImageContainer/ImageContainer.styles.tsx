import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../theme/globalTheme";

export const Container = styled.div`
  width: 100%;
  height: 250px;
  min-height: 250px;
  border-radius: 0.5rem;
  overflow: hidden;

  position: relative;

  img {
    width: 100%;
    height: 250px;
    min-height: 250px;
    object-fit: cover;
  }
`;

export const CardArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.225rem;
  top: 0.5rem;
  left: 0.5rem;
  pointer-events: none;

  .info-chip {
    display: block;
    padding: 0.225rem;
    border-radius: 0.225rem;
    color: ${theme.lightGrey};
    width: fit-content;
  }

  .blue {
    background-color: ${theme.lightBlue};
  }
  .green {
    background-color: ${theme.green};
  }
  .red {
    background-color: ${theme.red};
  }
`;

export const FavoriteArea = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;

  .favorite-button {
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    border: none;
    width: 40px;
    height: 40px;
    background-color: ${theme.transparent};
    border-radius: 50%;
  }

  .icon {
    pointer-events: none;
    width: 24px;
    height: 24px;
  }

  .outline {
    fill: ${theme.lightGrey};
  }
  .filled {
    position: absolute;
    fill: ${theme.red2};
  }

  .hide {
    transition: 200ms all;
    width: 0;
  }
  .show {
    transition: 200ms all;
    width: 24px;
  }
  .show-bounce {
    animation: show-heart 400ms linear 2;
  }

  @keyframes show-heart {
    0%,
    50% {
      width: 24px;
      transform: scale(1.1);
    }
    50%,
    70% {
      transform: scale(1.3);
    }
    70%,
    100% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
