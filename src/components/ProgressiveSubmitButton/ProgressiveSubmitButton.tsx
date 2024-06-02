import * as S from "./ProgressiveSubmitButton.styles";
import CheckIcon from "@mui/icons-material/Check";

export const ProgressiveSubmitButton = ({
  className,
  percentage,
  onClick,
}: Props) => {
  return (
    <S.Wrapper
      className={percentage === 100 ? `${className}${" hide"}` : className}
    >
      <S.Button className={percentage === 100 ? "show" : ""} onClick={onClick}>
        <CheckIcon />
      </S.Button>
      <S.ProgressiveContainer
        className={percentage === 100 ? "hide" : ""}
        $barPercentage={percentage}
      >
        <span className="text-value">{`${percentage}%`}</span>
        <svg>
          <circle cx="45" cy="45" r="46" strokeLinecap="round" />
        </svg>
      </S.ProgressiveContainer>
    </S.Wrapper>
  );
};

type Props = {
  className?: string;
  percentage: number;
  onClick: () => void;
};
