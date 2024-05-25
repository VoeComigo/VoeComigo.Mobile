import * as S from "./ChipButton.styles";

export const ChipButton = ({
  className,
  text,
  icon,
  backgroundColor,
  borderProps,
  textProps,
  iconProps,
  onClick,
}: Props) => {
  return (
    <S.CardArea
      className={className}
      $borderColor={borderProps?.color}
      $borderTickness={borderProps?.tickness}
      $backgroundColor={backgroundColor}
      $textColor={textProps?.color}
      $textSize={textProps?.size}
      $iconColor={iconProps?.color}
      $iconSize={iconProps?.size}
      onClick={onClick && onClick}
    >
      {text}
      {icon && icon}
    </S.CardArea>
  );
};

type Props = {
  className?: string;
  text: string;
  icon?: JSX.Element;
  backgroundColor?: string;
  borderProps?: {
    tickness?: string;
    color?: string;
  };
  textProps?: {
    size?: string;
    color?: string;
  };
  iconProps?: {
    size?: string;
    color?: string;
  };
  onClick?: () => void;
};
