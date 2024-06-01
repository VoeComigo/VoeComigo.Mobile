import { IAircraftCrew } from "../AircraftCard/types";
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
              key={el.aircraft.id}
              roles={el.roles}
              isFavorite={el.isFavorite}
              aircraftData={el.aircraft}
              refetchData={refetchData}
            />
          ) : (
            <AircraftInviteCard
              key={el.aircraft.id}
              inviteID={el.id || ""}
              roles={el.roles}
              aircraftData={el.aircraft}
              refetchData={refetchData}
            />
          );
        })}
      </Carousel>
    </S.Content>
  );
};

type Props = {
  aircraftData: IAircraftCrew[];
  cardTypes?: "AIRCRAFT" | "INVITATION";
  refetchData?: () => void;
};
