import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";
import { Card } from "../";

export const EnchancedCard = styled(Card)`
  height: 100%;
  padding: 1rem;
  position: relative;

  &.no-data {
    box-shadow: none;
    border: 2px dashed ${theme.grey};
  }
`;

export const NoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .icon-area {
    //transform: scale(0.5);
    margin-bottom: 2.5rem;
    width: 135px;
    height: 149.5px;
  }

  .avatar-area {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    //margin-bottom: 2rem;
  }

  .no-content-text {
    text-align: center;
    font-size: ${theme.fontSize22};
    color: ${theme.purple2};
  }
`;
