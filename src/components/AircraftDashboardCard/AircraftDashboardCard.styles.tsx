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
    fill: ${theme.purple};
  }

  &.flex-col {
    flex-direction: column;
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
    align-items: center;
    justify-content: center;
    font-weight: ${theme.fontWeight600};
    gap: 0.5rem;
  }
`;

export const FlightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  .take-off {
    display: flex;
    gap: 0.5rem;
    width: fit-content;
    padding: 0.225rem;
    border-radius: 0.225rem;
    background-color: ${theme.green3};
    font-weight: ${theme.fontWeight600};
    align-self: flex-start;
    svg {
      fill: ${theme.green2};
    }
  }

  .landing {
    display: flex;
    gap: 0.5rem;
    width: fit-content;
    padding: 0.225rem;
    border-radius: 0.225rem;
    background-color: ${theme.yellow3};
    font-weight: ${theme.fontWeight600};
    align-self: flex-end;
    svg {
      fill: ${theme.yellow2};
    }
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
