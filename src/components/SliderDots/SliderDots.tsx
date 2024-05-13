import * as S from "./SliderDots.styles";

export const SliderDots = ({
  className,
  amount,
  sliderDotRef,
  onClick,
}: SliderProps) => {
  return (
    <S.DotsContainer className={className}>
      {sliderDotRef &&
        Array.from(Array(amount).keys()).map((_, i) => {
          return (
            <button
              key={`dot-${i}`}
              ref={sliderDotRef[i]}
              className="dot"
              onClick={() => onClick && onClick(i)}
            />
          );
        })}
    </S.DotsContainer>
  );
};

type SliderProps = {
  className?: string;
  sliderDotRef?: React.LegacyRef<HTMLButtonElement>[];
  amount: number;
  onClick?: (e: number) => void;
};
