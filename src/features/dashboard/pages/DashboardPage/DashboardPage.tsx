import * as S from "./DashboardPage.styles";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { useEffect, useState, useMemo } from "react";
import { usePageEventsHandling } from "../../../../contexts/PageEventsContext/PageEventsContext";
import { useGetProfile } from "../../hooks/useGetProfile";
import { useNavigate } from "react-router-dom";
import {
  DashboardHeader,
  IAircrafTermsChange,
  termsListController,
} from "./DashboardPage.utils";
import { AircraftDashboardCard } from "../../../../components";
import { useGetAircraft } from "../../../aircraft/hooks";
import { Carousel } from "../../../../components/Carousel/Carousel";
import { TermsOfUseModal } from "../../../../components/TermsOfUseModal/TermsOfUseModal";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { useModalContext } from "../../../../contexts/ModalContext/ModalContext";

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

  //  States:
  const [selectedIdx, setSelectedIdx] = useState<number>(0); //  Selected aircraft
  const [termsList, setTermsList] = useState<IAircrafTermsChange[]>([]);
  const [modalPhase, setModalPhase] = useState<"one" | "two">("one");

  // Modal context:
  const { toggleModal, setModalContent } = useModalContext("normal");

  // Modal content handler:
  useEffect(() => {
    setModalContent(
      <TermsOfUseModal
        aircraftID={
          (aircraftData && aircraftData[selectedIdx].aircraft.id) || ""
        }
        username={(data && data.name) || ""}
        registration={
          (aircraftData && aircraftData[selectedIdx].aircraft.registration) ||
          ""
        }
        termPhase={modalPhase}
        onPhaseChange={setModalPhase}
        refetch={getAircraft}
        closeModal={toggleModal}
      />
    );
  }, [selectedIdx, modalPhase]);

  //  Control modal appearance by clicking on the term, and also control the phase based on the checkbox:
  function onChangePhase(e: IAircrafTermsChange) {
    const aux = termsListController(termsList, e);
    setTermsList([...aux]);
    setModalPhase(e.accepted ? "two" : "one");
    return e.openModal && toggleModal();
  }

  //  Handle aircraft change:
  function onChangeAircraft(index: number) {
    setSelectedIdx(index);
    if (aircraftData) {
      const term = termsList.find(
        (item) => item.id === aircraftData[index].aircraft.id
      );
      term && setModalPhase(term.accepted ? "two" : "one");
      return;
    }
  }

  //  Main button click handler:
  function onClickMainButton() {
    if (aircraftData) {
      const aircraftCrew = aircraftData[selectedIdx];
      if (!aircraftData[selectedIdx].aircraft.hasOpeningTerm)
        return toggleModal();
      return navigate(
        `/logbook/${aircraftCrew.aircraft.id}/${aircraftCrew.aircraft.registration}`
      );
    }
    return;
  }

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
      mainButton={{
        icon: <AutoStoriesOutlinedIcon />,
        onClick: onClickMainButton,
      }}
    >
      <S.Container>
        {aircraftData && (
          <S.CarouselWrapper>
            <Carousel
              slidesAmount={aircraftData?.length || 0}
              hasNavigationDots={false}
              onChange={onChangeAircraft}
            >
              {aircraftData.map((el) => (
                <AircraftDashboardCard
                  key={el.aircraft.id}
                  aircraft={el.aircraft}
                  onTermInteraction={onChangePhase}
                />
              ))}
            </Carousel>
          </S.CarouselWrapper>
        )}
      </S.Container>
    </PageContainer>
  );
};
