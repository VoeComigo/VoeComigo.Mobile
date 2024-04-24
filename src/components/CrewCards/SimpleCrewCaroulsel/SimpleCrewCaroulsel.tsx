import * as S from "./SimpleCrewCaroulsel.styles";
import { useSlider, useSwipeContent } from "../../../hooks";
import { useEffect } from "react";
import {
  SimpleAddCard,
  SimpleCrewCard,
} from "../SimpleCrewCard/SimpleCrewCard";
import { SliderDots } from "../..";
import { IAircraftPerson } from "../../../features/aircraft/hooks/useGetCrew";

export const SimpleCrewCaroulsel = ({
  crewMembers,
  isOwner,
  onChange,
}: Prop) => {
  //  Swipe content controller:
  const { onTouchStart, onTouchMove, onTouchEnd, swipeDir, swipableRef } =
    useSwipeContent<HTMLDivElement>({
      swipeMode: "medium",
      slideAmount: (crewMembers && crewMembers.length + (isOwner ? 1 : 0)) || 0,
    });

  //  Carousel slider controller:
  const { offsetX, elementFullWidth, triggerSlider, sliderDotController } =
    useSlider({
      elementClassname: "crew-selector-container",
      slideAmount: (crewMembers && crewMembers.length + (isOwner ? 1 : 0)) || 0,
      sliderType: "infinite",
    });

  useEffect(() => {
    triggerSlider(swipeDir);
  }, [swipeDir]);

  //  Change callback:
  useEffect(() => {
    onChange(sliderDotController.highlighted);
  }, [sliderDotController]);

  return (
    <S.Container $width={elementFullWidth} $xOffset={offsetX}>
      {/* <h1>Tripulação:</h1> */}
      <div
        ref={swipableRef}
        className="crew-selector-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {crewMembers &&
          crewMembers.map((el) => (
            <SimpleCrewCard key={el.id} crewMember={el} />
          ))}
        {isOwner && <SimpleAddCard />}
      </div>
      <SliderDots {...sliderDotController} />
    </S.Container>
  );
};

type Prop = {
  isOwner?: boolean;
  crewMembers?: IAircraftPerson[];
  onChange: (e: number) => void;
};
