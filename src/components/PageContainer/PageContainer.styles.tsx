import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  padding: 1.5rem 1.5rem 7.5rem 1.5rem;

  overflow-x: hidden;
  overflow-y: auto;

  h1 {
    font-size: ${theme.fontSize24};
    font-weight: ${theme.fontWeight600};
    color: ${theme.purple};
  }

  h2 {
    font-size: ${theme.fontSize16};
    color: ${theme.purple2};
  }

  .header-section {
    position: fixed;
    z-index: 10;

    width: 100%;
    padding: 1rem;

    background-color: white;
    border-bottom: 1px solid ${theme.grey};

    left: 0;
    top: 0;
  }
`;
