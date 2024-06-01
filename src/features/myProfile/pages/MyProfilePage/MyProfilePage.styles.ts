import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../../theme/globalTheme";
import bg from "../../../../assets/cloud-bg.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const AvatarArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 320px;
  background-color: ${theme.primary};
  background-image: linear-gradient(337deg, #006dff, #006dff5c), url(${bg});
  background-size: cover;
  border-radius: 0rem 0rem 5rem 5rem;
  padding: 1.5rem;
  filter: drop-shadow(0px 4px 3px #00000033);

  .avatar-area {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    .change-avatar {
      position: relative;
      //overflow: hidden;

      .avatar {
        width: 140px;
        height: 140px;
      }

      .change-button {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        background-color: ${theme.lightGrey};
        box-shadow: ${theme.shadow4};
        transition: 200ms all;

        &:active {
          filter: brightness(0.8);
        }
        svg {
          fill: ${theme.purple};
        }
      }
    }
  }

  .action-buttons-area {
    display: flex;
    justify-content: space-between;
  }

  .action-button {
    display: flex;
    align-items: center;
    justify-content: center;
    //background-color: ${theme.primary};
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

  .hide {
    opacity: 0;
    pointer-events: none;
  }
`;

export const OptionsArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  overflow: visible;
  background-color: ${theme.lightGrey};
  padding: 20rem 1.5rem 2.5rem 1.5rem;
  scroll-behavior: smooth;

  .bottom-spacer {
    height: 64px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  .input-area {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      width: 100%;
    }
  }

  .modal-title-area {
    display: flex;
    flex-direction: column;
    width: 100%;

    .title {
      font-size: ${theme.fontSize22};
      font-weight: ${theme.fontWeight600};
      color: ${theme.purple};
    }
    .subtitle {
      font-size: ${theme.fontSize16};
      color: ${theme.purple};
    }
  }

  .checkbox-area {
    width: 100%;
    display: flex;

    font-size: ${theme.fontSize14};
    color: ${theme.purple};

    align-items: center;
    justify-content: left;
  }

  .submit-area {
    width: 100%;
    margin-bottom: 2.5rem;
    .primary {
      width: 100%;
      background-color: ${theme.primary};
      transition: 200ms all;
      &:disabled {
        background-color: ${theme.grey4};
        color: ${theme.grey5};
      }
    }
  }
`;
