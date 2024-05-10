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
  align-items: flex-start;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
    fill: ${theme.purple};
  }

  p {
    width: 70%;
    color: ${theme.purple2};
    font-size: ${theme.fontSize14};
  }
`;
