import * as S from "./AircraftPage.styles";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { AircraftCarousel } from "../../../../components/AircraftCarousel/AircraftCarousel";
import { useGetAircraft } from "../../hooks";
import { useEffect } from "react";
import { EmptyCard } from "../../../../components/EmptyCard/EmptyCard";
import { usePageEventsHandling } from "../../../../contexts/PageEventsContext/PageEventsContext";
import AddIcon from "@mui/icons-material/Add";
import { AircraftModal } from "../../../../components/AircraftModal/AircraftModal";
import { useModalContext } from "../../../../contexts/ModalContext/ModalContext";

export const AircraftPage = () => {
  //  Loading and error handling:
  const { onChangeEvent } = usePageEventsHandling();

  //  Data fetching:
  const { getAircraft, data, loading, error } = useGetAircraft();

  useEffect(() => {
    getAircraft();
  }, []);

  useEffect(() => {
    if (loading) return onChangeEvent("loading");
    if (!loading && error) return onChangeEvent("error");
    if (!loading) return onChangeEvent("done");
  }, [loading]);

  // Modal context:
  const { toggleModal, setModalContent } = useModalContext("ticket");

  function onMainButtonClick() {
    setModalContent(<AircraftModal />);
    toggleModal();
  }

  return (
    <PageContainer
      actualRoute="aircraft"
      header={{
        title: "Aeronaves",
      }}
      mainButton={{
        icon: <AddIcon />,
        onClick: onMainButtonClick,
      }}
    >
      <S.Container>
        {data ? (
          <AircraftCarousel
            aircraftData={data}
            refetchData={() => getAircraft()}
          />
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
