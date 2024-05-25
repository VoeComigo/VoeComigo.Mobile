import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.primary};
  width: 100%;
  height: fit-content;
  /* display: inline-flex; */
  /* margin-top: 3rem; */
  z-index: 2;
  left: 0;
  top: 62px;
  gap: 0.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0.5rem;
  box-shadow: -1px 2px 4px 0px #00000038;
`;
