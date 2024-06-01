import * as S from "./ChipButton.styles";

export const ChipButton = ({
  className,
  text,
  icon,
  disabled,
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
      disabled={disabled}
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
  disabled?: boolean;
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
