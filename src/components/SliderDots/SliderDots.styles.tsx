import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

export const DotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 0.5rem;
  margin-top: auto;
  gap: 1rem;

  align-items: center;
  justify-content: center;

  .dot {
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${theme.grey3};
    transition: 200ms all;
  }

  .active {
    background-color: ${theme.lightBlue};
    transition: 200ms all;
  }
`;
