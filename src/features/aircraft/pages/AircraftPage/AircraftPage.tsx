import * as S from "./AircraftPage.styles";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { AircraftCarousel } from "../../../../components/AircraftCarousel/AircraftCarousel";
import { useGetAircraft } from "../../hooks";
import { useEffect } from "react";
import { EmptyCard } from "../../../../components/EmptyCard/EmptyCard";

export const AircraftPage = () => {
  const { getAircraft, data, loading, error } = useGetAircraft();

  useEffect(() => {
    getAircraft();
  }, []);

  return (
    <PageContainer
      actualRoute="aircraft"
      header={{
        title: "Aeronaves",
      }}
    >
      <S.Container>
        {data ? (
          <AircraftCarousel aircraftData={data} />
        ) : (
          <EmptyCard
            title={
              "Nenhuma aeronave cadastrada. Utilize o '+' abaixo para verificar as opções disponíveis"
            }
          />
        )}
      </S.Container>
    </PageContainer>
  );
};
