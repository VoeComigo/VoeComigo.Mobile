import * as S from "./ProgressiveButton.styles";

export const ProgressiveButton = ({
  className,
  title,
  iconProps,
  barProps,
  detailsColor,
  onClick,
}: Props) => {
  function getBarPercentage() {
    const { min, max } = barProps;
    return (min * 100) / max + "%";
  }
  return (
    <S.Button
      className={className}
      onClick={onClick}
      $iconColor={detailsColor}
      $barColor={detailsColor}
      $barPercentage={getBarPercentage()}
    >
      <span className="icon-area">{iconProps.icon}</span>
      <p className="title">{title}</p>
      <span className="progress-bar-container">
        <p className="label">{`${barProps.min}/${barProps.max}`}</p>
        <span className="bar"></span>
      </span>
    </S.Button>
  );
};

type Props = {
  className?: string;
  title: string;
  detailsColor: string;
  iconProps: {
    icon: JSX.Element;
  };
  barProps: {
    min: number;
    max: number;
  };
  onClick: () => void;
};
