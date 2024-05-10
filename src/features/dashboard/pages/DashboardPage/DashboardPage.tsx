import * as S from "./DashboardPage.styles";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { useEffect } from "react";
import { usePageEventsHandling } from "../../../../contexts/PageEventsContext/PageEventsContext";
import { useGetProfile } from "../../hooks/useGetProfile";
import { useNavigate } from "react-router-dom";
import { DashboardHeader } from "./DashboardPage.utils";
import { AircraftActionCard } from "../../../../components";

export const DashboardPage = () => {
  //  Navigation handling:
  const navigate = useNavigate();

  //  Loading and error handling:
  const { onChangeEvent } = usePageEventsHandling();

  ///  Data fetching:
  const { getProfile, data, loading, error } = useGetProfile();

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (loading) return onChangeEvent("loading");
    if (!loading && error) return onChangeEvent("error");
    if (!loading) return onChangeEvent("done");
  }, [loading]);

  //  If user got some registration pendencies, redirect:
  if (data && !data.completeRegistration) return navigate("/my-profile");

  return (
    <PageContainer
      actualRoute="dashboard"
      header={{
        customHeader: (
          <DashboardHeader
            greetings="Bem vindo,"
            username={data?.name || ""}
            userPhoto={data?.photo || ""}
            onClick={() => navigate("/my-profile")}
          />
        ),
      }}
    >
      <S.Container>
        <AircraftActionCard registry={""} model={""} type={"find"} />
      </S.Container>
    </PageContainer>
  );
};
