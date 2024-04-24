import styled from "styled-components";
import { voeComigoTheme as theme } from "../../theme/globalTheme";

type Props = {
  type: "error" | "info" | "warn" | "success";
};

// Returns the correct background color based on the notification type
function getBackgroundColor(type: string) {
  if (type === "error") return theme.errorLight;
  if (type === "success") return theme.successLight;
  if (type === "info") return theme.infoLight;
  if (type === "warn") return theme.warnLight;
  return "#fff";
}

// Returns the correct detail color based on the notification type
function getDetailColor(type: string) {
  if (type === "error") return theme.error;
  if (type === "success") return theme.success;
  if (type === "info") return theme.info;
  if (type === "warn") return theme.warn;
  return "#c8c8c8";
}

export const Container = styled.div<Props>`
  //position: fixed;
  position: relative;
  width: 90%;
  height: fit-content;
  border-radius: 0.5rem;
  background-color: ${(props) => getBackgroundColor(props.type)};
  //border: 1px solid ${theme.notificationBorder};
  //margin: 1.5rem 0rem;
  padding: 1rem;
  left: 50%;
  transform: translateX(-50%);

  box-shadow: ${theme.notificationShadow};

  display: flex;
  column-gap: 0.5rem;

  z-index: 99;

  //  Animation Handling:
  transition: 200ms all;
  opacity: 0;

  &.show {
    transition: 200ms all;
    opacity: 1;
  }

  .title {
    font-size: ${theme.fontSize16};
    font-weight: ${theme.fontWeight600};
    color: ${theme.notificationTitle};
    margin-bottom: 0.225rem;
  }

  .text {
    font-size: ${theme.fontSize14};
    color: ${theme.notificationText};
  }

  .icon {
    margin-left: 0.5rem;
    width: 24px;
    fill: ${(props) => getDetailColor(props.type)};
  }
`;

export const ColorStripe = styled.span<Props>`
  display: block;
  width: 16px;
  position: absolute;
  background-color: ${(props) => getDetailColor(props.type)};
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 0.5rem 0 0 0.5rem;
`;
