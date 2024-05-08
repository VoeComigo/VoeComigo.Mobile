import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../../theme/globalTheme";

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
  border-radius: 0rem 0rem 5rem 5rem;
  padding: 1.5rem;

  .avatar-area {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    .avatar {
      width: 140px;
      height: 140px;
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
    background-color: ${theme.primary};
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
  height: 100%;
  overflow: visible;
  background-color: ${theme.lightGrey};
  padding: 20rem 1.5rem 2.5rem 1.5rem;
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
