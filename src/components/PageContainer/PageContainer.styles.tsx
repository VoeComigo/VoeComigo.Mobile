import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 1.5rem 1.5rem 7.5rem 1.5rem;

  overflow: hidden;
  overflow-y: auto;

  .content-area {
    height: 100%;
  }

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
    width: 100%;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${theme.grey};
  }

  .modal-content {
    margin-top: 2rem;
    justify-content: space-between;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 3.5rem;
  }
`;
