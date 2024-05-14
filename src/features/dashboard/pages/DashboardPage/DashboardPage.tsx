import * as S from "./DashboardPage.styles";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { useEffect, useState, useMemo } from "react";
import { usePageEventsHandling } from "../../../../contexts/PageEventsContext/PageEventsContext";
import { useGetProfile } from "../../hooks/useGetProfile";
import { useNavigate } from "react-router-dom";
import { DashboardHeader } from "./DashboardPage.utils";
import { AircraftDashboardCard } from "../../../../components";
import { useGetAircraft } from "../../../aircraft/hooks";
import { Carousel } from "../../../../components/Carousel/Carousel";
import { Modal, useModalController } from "../../../../hooks";
import { TermsOfUseModal } from "../../../../components/TermsOfUseModal/TermsOfUseModal";

export const DashboardPage = () => {
  //  Navigation handling:
  const navigate = useNavigate();

  //  Loading and error handling:
  const { onChangeEvent } = usePageEventsHandling();

  ///  Data fetching:
  const { getProfile, data, loading, error } = useGetProfile();
  const {
    getAircraft,
    data: aircraftData,
    loading: aircraftLoading,
    error: aircraftError,
  } = useGetAircraft();

  useEffect(() => {
    getProfile();
    getAircraft();
  }, []);

  //  Loading memoization for all requests:
  const dataLoading = useMemo(() => {
    return loading && aircraftLoading;
  }, [loading, aircraftLoading]);

  //  Error memoization for all requests:
  const dataErrors = useMemo(() => {
    return error && aircraftError;
  }, [error, aircraftError]);

  useEffect(() => {
    if (dataLoading) return onChangeEvent("loading");
    if (!dataLoading && dataErrors) return onChangeEvent("error");
    if (!dataLoading) return onChangeEvent("done");
  }, [dataLoading]);

  //  If user got some registration pendencies, redirect:
  if (data && !data.completeRegistration) return navigate("/my-profile");

  //  Selected aircraft:
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  //  Modal controller:
  const { toggleModal, controller } = useModalController();

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
        {aircraftData && (
          <S.CarouselWrapper>
            <Carousel
              slidesAmount={aircraftData?.length || 0}
              hasNavigationDots={false}
              onChange={setSelectedIdx}
            >
              {aircraftData.map((el) => (
                <AircraftDashboardCard
                  key={el.id}
                  aircraft={el}
                  onOpenTerm={toggleModal}
                />
              ))}
            </Carousel>
          </S.CarouselWrapper>
        )}
        <Modal {...controller}>
          <TermsOfUseModal
            aircraftID={(aircraftData && aircraftData[selectedIdx].id) || "0"}
          />
        </Modal>
      </S.Container>
    </PageContainer>
  );
};
