import * as S from "./InformationContainer.styles";
import { useEffect } from "react";
import { useSlider, useSwipeContent } from "../../../hooks";
import { useGenerateInformationSlides } from "./InformationContainer.utils";
import { SliderDots } from "../..";
import { IAircraftModel } from "../types";

export const InformationContainer = (containerProps: AircraftInfoProps) => {
  const { slidesArray } = useGenerateInformationSlides(containerProps);

  const { onTouchStart, onTouchMove, onTouchEnd, swipeDir, swipableRef } =
    useSwipeContent<HTMLDivElement>({
      swipeMode: "smallest",
      slideAmount: slidesArray.length,
    });

  const { offsetX, elementFullWidth, triggerSlider, sliderDotController } =
    useSlider({
      elementClassname: "swipable-information-container",
      slideAmount: slidesArray.length,
    });

  useEffect(() => {
    triggerSlider(swipeDir);
  }, [swipeDir]);

  return (
    <S.Container
      ref={swipableRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <S.InformationContainer
        className="swipable-information-container"
        $innerWidth={elementFullWidth}
        $offset={offsetX}
      >
        {slidesArray.map((slide, i) => {
          return (
            <div
              key={`content-${i}`}
              className={`content${
                sliderDotController.highlighted === i
                  ? " show-info"
                  : " hide-info"
              }`}
            >
              {slide.map((item) => {
                return (
                  <div key={item.title}>
                    <p className="title">{item.title}</p>
                    <p>{item.value}</p>
                    {item.subValue && <p>{item.subValue}</p>}
                  </div>
                );
              })}
            </div>
          );
        })}
      </S.InformationContainer>
      <SliderDots {...sliderDotController} />
    </S.Container>
  );
};

export type AircraftInfoProps = {
  owner: {
    name: string;
    cpfCnpj: string;
  };
  operator: {
    name: string;
    cpfCnpj: string;
  };
  model: IAircraftModel;
  manufacturingYear: string;
  serieNumber: string;
  flightType: string;
  registrationCategory: string;
  passengerAmount: number;
  seatsAmount: number;
  maxCrewMembers: number;
};
