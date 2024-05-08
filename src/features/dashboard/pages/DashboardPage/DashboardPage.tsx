import * as S from "./DashboardPage.styles";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { AircraftCarousel } from "../../../../components/AircraftCarousel/AircraftCarousel";
import { useEffect } from "react";
import { EmptyCard } from "../../../../components/EmptyCard/EmptyCard";
import { usePageEventsHandling } from "../../../../contexts/PageEventsContext/PageEventsContext";

export const DashboardPage = () => {
  //  Loading and error handling:
  const { onChangeEvent } = usePageEventsHandling();

  /*   //  Data fetching:
  const { getAircraft, data, loading, error } = useGetAircraft();

  useEffect(() => {
    getAircraft();
  }, []);

  useEffect(() => {
    if (loading) return onChangeEvent("loading");
    if (!loading && error) return onChangeEvent("error");
    if (!loading) return onChangeEvent("done");
  }, [loading]); */

  return (
    <PageContainer
      actualRoute="dashboard"
      header={{
        title: "Aeronaves",
      }}
    >
      <S.Container></S.Container>
    </PageContainer>
  );
};
