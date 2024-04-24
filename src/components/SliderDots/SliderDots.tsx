import * as S from "./SliderDots.styles";

export const SliderDots = ({
  className,
  amount,
  highlighted,
  onClick,
}: SliderProps) => {
  return (
    <S.DotsContainer className={className}>
      {Array.from(Array(amount).keys()).map((_, i) => {
        return (
          <button
            key={`dot-${i}`}
            className={`dot${highlighted === i ? " active" : ""}`}
            onClick={() => onClick && onClick(i)}
          />
        );
      })}
    </S.DotsContainer>
  );
};

type SliderProps = {
  className?: string;
  amount: number;
  highlighted: number;
  onClick?: (e: number) => void;
};
