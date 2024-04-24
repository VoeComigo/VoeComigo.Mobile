import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 150px;
  align-items: center;

  img {
    width: 50%;
    height: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  .action-card {
    height: 90%;
    bottom: 0;
    padding-top: 1rem;
    position: absolute;
  }

  .action-card-content {
    display: flex;
    flex-direction: row;
    height: 100%;
    gap: 1rem;
  }

  .info-chip {
    display: block;
    position: absolute;
    padding: 0.225rem;
    border-radius: 0.225rem;
    background-color: ${theme.lightBlue};
    color: ${theme.lightGrey};
    width: fit-content;
    z-index: 2;
  }

  .button-area {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }

  .primary {
    background-color: ${theme.primary};
  }

  .secondary {
    color: ${theme.primary};
    border: 1px solid ${theme.primary};
  }
`;
