import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../../theme/globalTheme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 5.5rem;
`;

export const DashboardHeader = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 100%;

  .fs14 {
    font-size: ${theme.fontSize14};
  }
  .fs22 {
    font-size: ${theme.fontSize32};
  }
  .bold {
    font-weight: ${theme.fontWeight600};
  }
  .text-area {
    p {
      color: ${theme.purple};
    }
  }

  .avatar {
    width: 64px;
    height: 64px;
  }

  .avatar-button {
    background-color: transparent;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: fit-content;
`;
