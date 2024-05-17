import styled from "styled-components";

type Props = {
  $backgroundColor?: string;
  $textSize?: string;
  $textColor?: string;
  $iconSize?: string;
  $iconColor?: string;
};
export const CardArea = styled.div<Props>`
  display: flex;
  width: fit-content;
  padding: 0.225rem;
  gap: 0.225rem;
  border-radius: 0.225rem;
  align-items: center;

  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "#000"};
  color: ${(props) => (props.$textColor ? props.$textColor : "#fff")};

  font-size: ${(props) => (props.$textSize ? props.$textSize + "px" : "12px")};

  svg {
    width: ${(props) => (props.$iconSize ? props.$iconSize + "px" : "8px")};
    height: ${(props) => (props.$iconSize ? props.$iconSize + "px" : "8px")};
    fill: ${(props) => (props.$iconColor ? props.$iconColor : "#fff")};
  }
`;
