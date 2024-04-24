import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../theme/globalTheme";
import { Card } from "../..";

export const EnchancedCard = styled(Card)`
  height: 350px;
  padding: 1rem;
  position: relative;

  &.no-data {
    box-shadow: none;
    border: 2px dashed ${theme.grey};
  }
`;

export const NoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .icon-blue {
    width: 100px;
    height: 100px;
    fill: ${theme.lightBlue};
  }

  .avatar-area {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    //margin-bottom: 2rem;
  }

  .no-content-text {
    text-align: center;
    font-size: ${theme.fontSize22};
    color: ${theme.purple2};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  .avatar {
    width: 100px;
    height: 100px;
  }

  .avatar-area {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    //margin-bottom: 2rem;
  }

  h1 {
    text-align: center;
    font-size: ${theme.fontSize24};
    font-weight: ${theme.fontWeight600};
    color: ${theme.purple2};
  }

  p {
    font-size: ${theme.fontSize16};
    color: ${theme.purple2};
  }

  .bold {
    font-size: ${theme.fontSize18};
    font-weight: ${theme.fontWeight600};
  }

  .details-area {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .role-area {
      width: 100%;
      border-right: 1px solid ${theme.grey};
      text-align: center;
    }
    .anac-area {
      width: 100%;
      text-align: center;
    }
  }

  .remove-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: ${theme.lightGrey};
    right: 1rem;
    top: 1rem;
    transition: 200ms all;
    border-radius: 100%;
    width: 32px;
    height: 32px;

    .trashcan-icon {
      fill: ${theme.error};
      pointer-events: none;
    }

    &:active {
      filter: brightness(0.9);
    }

    :disabled {
      .trashcan-icon {
        fill: ${theme.grey5};
        pointer-events: none;
      }
    }
  }

  .button-area {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    //margin-top: 2rem;

    .option-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 100%;

      transition: 200ms all;

      &:active {
        filter: brightness(0.7);
      }
    }

    .blue {
      background-color: ${theme.lightBlue};
    }
    .blue-pale {
      background-color: ${theme.blue2};
    }
    .red {
      background-color: ${theme.error};
    }
    .green {
      background-color: ${theme.success};
    }

    svg {
      fill: ${theme.lightGrey};
      pointer-events: none;
    }
  }

  .whatsapp-icon {
    fill: ${theme.lightGrey};
    width: 28px;
    height: 28px;
  }
`;

export const Spinner = styled.span`
  display: block;
  border-top: 3px solid ${theme.grey4};
  border-left: 3px solid ${theme.grey4};
  border-right: 3px solid ${theme.grey4};
  border-bottom: 3px solid transparent;

  border-radius: 100%;
  height: 16px;
  width: 16px;

  animation: spin 700ms linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
