import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";
import { Card } from "../";

export const EnchancedCard = styled(Card)`
  display: flex;
  flex-direction: row;
  flex-shrink: 0; // Prevent wrapping on inline-flex
  gap: 0.5rem;
  padding: 0.5rem;

  height: fit-content;
  width: 100%;

  align-items: center;
  justify-content: center;

  user-select: none;

  .avatar {
    width: 48px;
    height: 48px;
  }

  .member-title {
    width: fit-content;
    font-size: ${theme.fontSize16};
    font-weight: ${theme.fontWeight600};
    color: ${theme.purple2};
  }

  .member-code {
    width: fit-content;
    font-size: ${theme.fontSize14};
    font-weight: ${theme.fontWeight600};
    color: ${theme.purple2};
  }

  .member-info {
    font-size: ${theme.fontSize14};
    color: ${theme.purple2};
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    text-align: left;

    .status-info {
      display: inline-flex;
      align-items: center;
      gap: 0.225rem;
      font-size: ${theme.fontSize12};
    }
    svg {
      width: 1rem;
      height: 1rem;
      min-width: 1rem;
      min-height: 1rem;
    }
    .valid {
      svg {
        fill: ${theme.success};
      }
    }
    .invalid {
      svg {
        fill: ${theme.error};
      }
    }
  }
`;
