import * as S from "./InformationContainer.styles";
import { useGenerateInformationSlides } from "./InformationContainer.utils";
import { IAircraftModel } from "../types";
import { Carousel } from "../../Carousel/Carousel";

export const InformationContainer = (containerProps: AircraftInfoProps) => {
  const { slidesArray } = useGenerateInformationSlides(containerProps);

  return (
    <S.Container>
      <Carousel slidesAmount={slidesArray.length} hasNavigationDots stopSwiping>
        {slidesArray.map((slide, i) => {
          return (
            <div key={`content-${i}`} className="information-content">
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
      </Carousel>
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
