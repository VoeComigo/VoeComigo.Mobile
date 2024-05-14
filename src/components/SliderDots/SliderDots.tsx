import * as S from "./SliderDots.styles";

export const SliderDots = ({
  className,
  amount,
  activeSlide,
  onClick,
}: SliderProps) => {
  return (
    <S.DotsContainer className={className}>
      {Array.from(Array(amount).keys()).map((_, i) => {
        return (
          <button
            key={`dot-${i}`}
            className={`dot${activeSlide === i ? " active" : ""}`}
            onClick={() => onClick && onClick(i)}
          />
        );
      })}
    </S.DotsContainer>
  );
};

type SliderProps = {
  amount: number;
  className?: string;
  activeSlide?: number;
  onClick?: (e: number) => void;
};
