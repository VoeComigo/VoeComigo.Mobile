import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../theme/globalTheme";
import { Card } from "../..";

export const EnchancedCard = styled(Card)`
  height: 80px;
  padding: 1rem;

  &.no-data {
    box-shadow: none;
    border: 2px dashed ${theme.grey};
  }
`;

export const NoContentContainer = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.lightGrey};

  .icon-blue {
    width: 24px;
    height: 24px;
    fill: ${theme.purple2};
  }

  .no-content-text {
    text-align: center;
    font-size: ${theme.fontSize22};
    color: ${theme.purple2};
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 1rem;

  .avatar {
    width: 48px;
    height: 48px;
  }

  h1 {
    font-size: ${theme.fontSize22};
    font-weight: ${theme.fontWeight600};
    color: ${theme.purple2};
  }

  p {
    font-size: ${theme.fontSize14};
    color: ${theme.purple2};
  }

  .name-and-email {
    text-align: left;
  }
`;
