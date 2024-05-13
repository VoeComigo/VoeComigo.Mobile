import * as S from "./SimpleCrewCaroulsel.styles";
import { useSlider, useSwipeContent } from "../../../hooks";
import { useEffect } from "react";
import { SimpleCrewCard } from "../SimpleCrewCard/SimpleCrewCard";
import { SliderDots } from "../..";
import { IAircraftPerson } from "../../../features/aircraft/hooks/useGetCrew";
import { useSliderV2 } from "./useNewSlider";

export const SimpleCrewCaroulsel = ({ crewMembers, onChange }: Prop) => {
  //  Swipe content controller:
  /* const { onTouchStart, onTouchMove, onTouchEnd, swipeDir, swipableRef } =
    useSwipeContent<HTMLDivElement>({
      swipeMode: "medium",
      slideAmount: (crewMembers && crewMembers.length) || 0,
    });

  //  Carousel slider controller:
  const { offsetX, elementFullWidth, triggerSlider, sliderDotController } =
    useSlider({
      elementClassname: "crew-selector-container",
      slideAmount: (crewMembers && crewMembers.length) || 0,
      sliderType: "infinite",
    });

  useEffect(() => {
    triggerSlider(swipeDir);
  }, [swipeDir]);

  //  Change callback:
  useEffect(() => {
    onChange(sliderDotController.highlighted);
  }, [sliderDotController]); */

  const { carouselRef, slidesRef, sliderController } = useSliderV2({
    slidesAmount: crewMembers?.length,
    hasSliderController: true,
  });

  //  Change callback:
  useEffect(() => {
    onChange(0);
  }, [sliderController]);

  return (
    <S.Wrapper>
      <S.Container ref={carouselRef}>
        {crewMembers &&
          crewMembers.map((el, i) => (
            <SimpleCrewCard ref={slidesRef[i]} key={el.id} crewMember={el} />
          ))}
      </S.Container>
      <SliderDots {...sliderController} />
    </S.Wrapper>
  );
};

type Prop = {
  isOwner?: boolean;
  crewMembers?: IAircraftPerson[];
  onChange: (e: number) => void;
};
