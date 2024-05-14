import { IAircraft } from "../AircraftCard/types";
import { AircraftCards } from "../AircraftCard/AircraftCard";
import { AircraftInviteCard } from "../AircraftInviteCard/AircraftInviteCard";
import { Carousel } from "../Carousel/Carousel";
import * as S from "./AircraftCarousel.styles";

export const AircraftCarousel = ({
  aircraftData,
  cardTypes = "AIRCRAFT",
  refetchData,
}: Props) => {
  return (
    <S.Content>
      <Carousel
        slidesAmount={aircraftData.length}
        hasNavigationDots={false}
        hasInfiniteScrolling={false}
      >
        {aircraftData.map((el) => {
          return cardTypes === "AIRCRAFT" ? (
            <AircraftCards
              key={el.id}
              aircraftData={el}
              refetchData={refetchData}
            />
          ) : (
            <AircraftInviteCard
              key={el.id}
              aircraftData={el}
              refetchData={refetchData}
            />
          );
        })}
      </Carousel>
    </S.Content>
  );
};

type Props = {
  aircraftData: IAircraft[];
  cardTypes?: "AIRCRAFT" | "INVITATION";
  refetchData?: () => void;
};
