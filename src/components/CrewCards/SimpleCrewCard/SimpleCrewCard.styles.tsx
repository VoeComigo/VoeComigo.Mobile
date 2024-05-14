import styled from "styled-components";
import { voeComigoTheme as theme } from "../../../theme/globalTheme";
import { Card } from "../..";

export const EnchancedCard = styled(Card)`
  display: flex;
  flex-direction: row;
  flex-shrink: 0; // Prevent wrapping on inline-flex
  gap: 1rem;

  height: 80px;
  width: 100%;
  padding: 1rem;

  align-items: center;
  justify-content: center;

  user-select: none;

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
