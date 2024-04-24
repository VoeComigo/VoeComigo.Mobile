import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Wrapper = styled.section`
  position: fixed;
  z-index: 3;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 1rem 1rem;

  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5));

  .icons {
    fill: ${theme.lightGrey};
    pointer-events: none;
  }

  .floating-button {
    position: fixed;
    border: none;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;

    background-color: ${theme.primary};

    left: 50%;
    bottom: 55px;
    transform: translateX(-50%);

    //box-shadow: ${theme.shadow};

    cursor: pointer;

    transition: 100ms all;

    svg {
      fill: ${theme.lightGrey};
      pointer-events: none;
    }
  }

  .floating-button:hover {
    filter: brightness(0.9);
  }
  .floating-button:active {
    filter: brightness(0.8);
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 2.5rem;

  position: relative;
  width: 100%;
  height: 70px;

  padding: 1rem;

  bottom: 0;
  background-color: ${theme.lightBlue};

  mask-image: radial-gradient(circle at top, transparent 37px, black 0px);

  .button-wrapper {
    display: flex;
    justify-content: space-around;
    width: 40%;
  }

  .normal-button {
    position: relative;

    border: none;
    border-radius: 50%;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 48px;
    height: 48px;

    background-color: ${theme.lightBlue};

    cursor: pointer;

    transition: 100ms all;
  }

  /* .normal-button:hover {
    filter: brightness(0.9);
  } */
  /*   .normal-button:active {
    filter: brightness(0.8);
  } */

  .navigator-dot {
    position: absolute;

    display: block;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${theme.blue};
    border-radius: 50%;

    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    opacity: 0;
    transition: 200ms all;
  }

  .show {
    transition: 200ms all;
    opacity: 1;
  }
`;
