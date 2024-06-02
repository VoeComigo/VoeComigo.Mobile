import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../../theme/globalTheme";
import bg from "../../../../assets/cloud-bg.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BlueArea = styled.div`
  display: flex;
  //position: fixed;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 35%;
  background-color: ${theme.primary};
  background-image: linear-gradient(337deg, #006dff, #006dff5c), url(${bg});
  background-size: cover;
  border-radius: 0rem 0rem 7rem 7rem;
`;

export const OptionsArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;

  padding: 2rem 1.5rem 2rem 1.5rem;
  overflow-y: auto;
  scroll-behavior: smooth;

  .action-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    transition: 200ms all;

    svg {
      width: 30px;
      height: 30px;
      fill: ${theme.lightGrey};
    }

    &:active {
      filter: brightness(0.8);
    }
  }

  .title-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 2.5rem;
  }

  .grey {
    color: ${theme.lightGrey};
  }
  .bold {
    font-weight: ${theme.fontWeight600};
  }
  .fs28 {
    font-size: ${theme.fontSize28};
  }
  .fs22 {
    font-size: ${theme.fontSize22};
  }

  .buttons {
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 7rem;
  }

  .submit-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    position: fixed;
    bottom: 0;
    padding: 1.5rem;
    left: 0;
  }
`;
