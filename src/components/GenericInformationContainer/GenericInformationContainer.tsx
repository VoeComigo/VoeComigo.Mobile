import * as S from "./GenericInformationContainer.styles";
import { useGenerateInformationSlides } from "./GenericInformationContainer.utils";
import { Carousel } from "../Carousel/Carousel";

export const GenericInformationContainer = ({
  data,
  slideBreakAt = 4,
  textProps,
}: Props) => {
  const { slidesArray } = useGenerateInformationSlides(data, slideBreakAt);

  return (
    <S.Container
      $textSize={textProps?.textSize}
      $titleSize={textProps?.titleSize}
    >
      <Carousel slidesAmount={slidesArray.length} hasNavigationDots stopSwiping>
        {slidesArray.map((slide, i) => {
          return (
            <div key={`content-${i}`} className="information-content">
              {slide.map((item) => {
                return (
                  <div key={item.title}>
                    <p className="title">{item.title}</p>
                    <p>{item.value}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </Carousel>
    </S.Container>
  );
};

export type Props = {
  data: {
    title: string;
    value: string | number;
  }[];
  slideBreakAt?: number;
  textProps?: {
    titleSize: string;
    textSize: string;
  };
};
