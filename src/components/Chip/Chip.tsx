import * as S from "./Chip.styles";

export const Chip = ({
  className,
  text,
  icon,
  backgroundColor,
  textProps,
  iconProps,
}: Props) => {
  return (
    <S.CardArea
      className={className}
      $backgroundColor={backgroundColor}
      $textColor={textProps?.color}
      $textSize={textProps?.size}
      $iconColor={iconProps?.color}
      $iconSize={iconProps?.size}
    >
      {icon && icon}
      {text}
    </S.CardArea>
  );
};

type Props = {
  className?: string;
  text: string;
  icon?: JSX.Element;
  backgroundColor?: string;
  textProps?: {
    size?: string;
    color?: string;
  };
  iconProps?: {
    size?: string;
    color?: string;
  };
};
