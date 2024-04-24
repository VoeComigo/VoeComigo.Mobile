import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const BlueArea = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  //height: fit-content;
  padding: 1.5rem;
  border-radius: 0 0 2rem 2rem;

  background-color: ${theme.primary};

  box-shadow: ${theme.shadow3};

  overflow: hidden;

  transition: 200ms all;

  .navigation-buttons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      background-color: ${theme.primary};
      color: ${theme.lightGrey};
      transition: 200ms all;
      border-radius: 100%;

      &:active {
        filter: brightness(0.9);
      }
    }
  }

  //  White box that contains the steps and the title:
  .steps-area {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 1rem;
    width: 100%;
    background-color: ${theme.lightGrey};
    gap: 1rem;

    h1 {
      text-align: center;
      width: 100%;
      color: ${theme.primary};
      font-size: ${theme.fontSize24};
      font-weight: ${theme.fontWeight600};
    }
  }

  .step-dot-area {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 0.5rem;
    justify-content: space-evenly;
  }

  .button-options-area {
    display: flex;
    width: 100%;
    height: 100%;

    align-items: center;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .input-area {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding-top: 2rem;
    border-top: 1px solid ${theme.lightGrey};

    .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.lightGrey};
    }
    .Mui-focused {
      color: ${theme.lightGrey};
      border-color: ${theme.lightGrey};
      border-width: 2px;
    }
    label {
      color: ${theme.lightGrey};
    }
    input,
    select {
      color: ${theme.lightGrey};
    }

    svg {
      fill: ${theme.lightGrey};
    }
  }

  .primary {
    background-color: ${theme.lightGrey};
    width: 100%;
    color: ${theme.primary};
  }

  .success-feedback {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding-top: 1rem;

    svg {
      width: 40px;
      height: 40px;
      fill: ${theme.primary};
    }

    h1 {
      font-size: ${theme.fontSize22};
      color: ${theme.primary};
    }
  }

  .hide {
    opacity: 0;
    transition: 200ms all;
    pointer-events: none;
  }
  .show {
    opacity: 1;
    transition: 200ms all;
    pointer-events: all;
  }

  .text-input {
    width: 100%;
  }

  .select-input {
    width: 100%;
    color: ${theme.lightGrey};
    legend {
      span {
        opacity: 1;
        transform: translateY(-5px);
      }
    }
  }

  .loader {
    position: absolute;
    width: 32px;
    height: 32px;
    border-top: 3px solid ${theme.lightGrey};
    border-right: 3px solid ${theme.lightGrey};
    border-left: 3px solid ${theme.lightGrey};
    border-bottom: 3px solid transparent;
    border-radius: 100%;
    z-index: 3;
    animation: rotate 600ms linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const OptionButtons = styled.button`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100px;
  height: 100px;
  background-color: ${theme.lightGrey};
  color: ${theme.primary};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: ${theme.shadow2};
  transition: 200ms all;

  &:active {
    filter: brightness(0.85);
  }

  svg {
    width: 32px;
    height: 32px;
    pointer-events: none;
  }

  &.valid {
    border: 2px dashed ${theme.lightGrey};
    background-color: ${theme.primary};
    color: ${theme.lightGrey};
  }

  &:disabled {
    /* background-color: ${theme.grey4};
    color: ${theme.grey5}; */
    filter: brightness(0.8);
  }

  .valid-icon {
    position: absolute;
    top: 4px;
    right: 4px;
    svg {
      width: 16px;
      height: 16px;
    }
  }

  .locked-icon {
    position: absolute;
    top: 4px;
    right: 4px;
    svg {
      width: 16px;
      height: 16px;
      fill: ${theme.primary};
    }
  }
`;

export const StepDot = styled.span`
  display: block;
  width: 32px;
  height: 32px;
  background-color: ${theme.primary};
  color: ${theme.lightGrey};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 200ms all;

  &.inactive {
    border: 2px dashed ${theme.primary};
    background-color: ${theme.lightGrey};
    color: ${theme.primary};
  }
`;

export const SuccessArea = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 2rem;

  align-items: center;
  justify-content: center;

  text-align: center;

  width: 100%;
  padding: 1.5rem;
  //border-radius: 2rem 2rem 0 0;

  background-color: ${theme.primary};

  box-shadow: ${theme.shadow3};

  overflow: hidden;

  transition: 500ms all;

  bottom: 0;
  left: 0;

  z-index: 5;

  &.show {
    opacity: 1;
    min-height: 100%;
  }
  &.hide {
    opacity: 0;
    pointer-events: none;
    min-height: 0px;
  }

  h1 {
    color: ${theme.lightGrey};
    font-size: ${theme.fontSize18};
  }

  svg {
    width: 64px;
    height: 64px;
    fill: ${theme.lightGrey};
  }

  .white-button {
    background-color: ${theme.lightGrey};
    width: 100%;
    color: ${theme.primary};
  }
`;
