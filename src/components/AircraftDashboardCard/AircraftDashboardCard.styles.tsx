import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";
import { Card } from "../Card/Card";

export const Container = styled(Card)`
  width: 100%;
  height: fit-content;
`;

export const DataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${theme.grey};

  img {
    height: 100px;
    width: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  .text-area {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    .info-chip {
      display: block;
      padding: 0.225rem;
      border-radius: 0.225rem;
      background-color: ${theme.lightBlue};
      color: ${theme.lightGrey};
      width: fit-content;
    }

    p {
      color: ${theme.purple};
    }

    .fs14 {
      font-size: ${theme.fontSize14};
    }
    .fs36 {
      font-size: ${theme.fontSize36};
    }
    .bold {
      font-weight: ${theme.fontWeight600};
    }
    .centered {
      text-align: center;
    }
  }
`;

export const DynamicContent = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  padding-top: 0.5rem;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
    fill: ${theme.purple2};
  }

  &.flex-col {
    flex-direction: column;
    position: relative;
  }

  p {
    width: 70%;
    color: ${theme.purple2};
    font-size: ${theme.fontSize14};
  }

  .bold {
    font-weight: ${theme.fontWeight600};
  }

  .next-flight-title {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-weight: ${theme.fontWeight600};
    gap: 0.5rem;
  }

  .calendar-icon {
    fill: #000;
    opacity: 0.04;
    width: 110px;
    position: absolute;
    right: 0;
    height: 110px;
    bottom: 10px;
  }
`;

export const FlightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.225rem;
  width: 100%;

  border: 1px solid ${theme.grey6};
  border-radius: 0.5rem;

  svg {
    fill: ${theme.lightGrey};
  }

  .flight-area {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  .text {
    width: 100%;
  }

  .green-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: ${theme.green2};
    width: 24px;
    height: 24px;
  }

  .yellow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: ${theme.yellow2};
    width: 24px;
    height: 24px;
  }
`;

export const CheckboxContent = styled.div`
  display: flex;
  text-align: left;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 0.5rem;

  p {
    font-size: ${theme.fontSize14};
    color: ${theme.purple2};
    width: fit-content;
  }

  .terms-button {
    background-color: transparent;
    width: fit-content;
    height: fit-content;
    font-size: ${theme.fontSize14};
    text-decoration: underline;
    font-weight: ${theme.fontWeight600};
  }
`;
