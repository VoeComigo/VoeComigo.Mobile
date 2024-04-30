import * as S from "./AircraftCarousel.styles";
import { IAircraft } from "../AircraftCard/types";
import { AircraftCards } from "../AircraftCard/AircraftCard";
import { useEffect } from "react";
import { useSlider, useSwipeContent } from "../../hooks";
import { AircraftInviteCard } from "../AircraftInviteCard/AircraftInviteCard";

export const AircraftCarousel = ({
  aircraftData,
  cardTypes = "AIRCRAFT",
}: Props) => {
  const { onTouchStart, onTouchMove, onTouchEnd, swipeDir, swipableRef } =
    useSwipeContent<HTMLDivElement>({
      swipeMode: "medium",
      slideAmount: aircraftData.length,
    });

  const { offsetX, elementFullWidth, triggerSlider } = useSlider({
    elementClassname: "aircraft-carousel",
    slideAmount: aircraftData.length,
    sliderType: "static",
  });

  useEffect(() => {
    triggerSlider(swipeDir);
  }, [swipeDir]);

  return (
    <S.Content
      className="aircraft-carousel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      ref={swipableRef}
      $offsetX={offsetX}
      $width={elementFullWidth}
    >
      {aircraftData.map((el) => {
        return cardTypes === "AIRCRAFT" ? (
          <AircraftCards key={el.id} aircraftData={el} />
        ) : (
          <AircraftInviteCard key={el.id} aircraftData={el} />
        );
      })}
    </S.Content>
  );
};

type Props = {
  aircraftData: IAircraft[];
  cardTypes?: "AIRCRAFT" | "INVITATION";
};
