import * as S from "./InformationButton.styles";

export const InformationButton = ({
  className,
  title,
  subtitle,
  icon,
  color,
  onClick,
}: Props) => {
  return (
    <S.InfoButton
      className={className}
      $gradient={{ initialColor: color.initial, endColor: color.end }}
      onClick={onClick}
    >
      <div className="information-container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="icon-container">{icon}</div>
    </S.InfoButton>
  );
};

type Props = {
  className?: string;
  title: string;
  subtitle: string;
  icon: JSX.Element;
  color: {
    initial: string;
    end: string;
  };
  onClick?: () => void;
};
