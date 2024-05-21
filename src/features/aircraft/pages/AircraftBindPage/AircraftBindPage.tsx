import * as S from "./AircraftBindPage.styles";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { AircraftCarousel } from "../../../../components";
import { EmptyCard } from "../../../../components/EmptyCard/EmptyCard";
import { useEffect } from "react";
import { useGetAircraftInvitation } from "../../hooks/useGetAircraftInvitation";
import { usePageEventsHandling } from "../../../../contexts/PageEventsContext/PageEventsContext";
import AddIcon from "@mui/icons-material/Add";
import { AircraftModal } from "../../../../components/AircraftModal/AircraftModal";
import { useModalContext } from "../../../../contexts/ModalContext/ModalContext";

export const AircraftBindPage = () => {
  //  Loading and error handling:
  const { onChangeEvent } = usePageEventsHandling();

  //  Data fetching:
  const { getAircraftInvitation, data, loading, error } =
    useGetAircraftInvitation();

  useEffect(() => {
    getAircraftInvitation();
  }, []);

  useEffect(() => {
    if (loading) return onChangeEvent("loading");
    if (!loading && error) return onChangeEvent("error");
    if (!loading) return onChangeEvent("done");
  }, [loading]);

  // Modal context:
  const { toggleModal, setModalContent } = useModalContext("ticket");
  useEffect(() => {
    setModalContent(<AircraftModal />);
  }, []);

  return (
    <PageContainer
      actualRoute="aircraft"
      header={{
        title:
          "Convites" + (data && data?.length >= 0 ? ` (${data?.length})` : ""),
      }}
      mainButton={{
        icon: <AddIcon />,
        onClick: toggleModal,
      }}
    >
      <S.Container>
        {data ? (
          <AircraftCarousel
            aircraftData={data}
            cardTypes="INVITATION"
            refetchData={() => getAircraftInvitation()}
          />
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
