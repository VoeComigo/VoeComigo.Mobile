import * as S from "./AircraftBindPage.styles";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { useNavigate } from "react-router-dom";
import { AircraftCarousel } from "../../../../components";
import { EmptyCard } from "../../../../components/EmptyCard/EmptyCard";
import { useEffect } from "react";
import { useGetAircraftInvitation } from "../../hooks/useGetAircraftInvitation";

export const AircraftBindPage = () => {
  const navigate = useNavigate();

  const { getAircraftInvitation, data, loading, error } =
    useGetAircraftInvitation();

  useEffect(() => {
    getAircraftInvitation();
  }, []);

  return (
    <PageContainer
      actualRoute="aircraft"
      header={{
        title:
          "Convites" + (data && data?.length >= 0 ? ` (${data?.length})` : ""),
      }}
    >
      <S.Container>
        {data ? (
          <AircraftCarousel aircraftData={data} cardTypes="INVITATION" />
        ) : (
          <EmptyCard
            title={
              "Nenhum convite localizado. Utilize o '+' abaixo para verificar as opções disponíveis"
            }
          />
        )}
      </S.Container>
    </PageContainer>
  );
};
