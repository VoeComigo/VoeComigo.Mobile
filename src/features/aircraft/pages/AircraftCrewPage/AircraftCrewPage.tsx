import * as S from "./AircraftCrewPage.styles";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { useParams } from "react-router-dom";
import { DetailedCrewCard } from "../../../../components/CrewCards/DetailedCrewCard/DetailedCrewCard";
import { SimpleCrewCaroulsel } from "../../../../components/CrewCards/SimpleCrewCaroulsel/SimpleCrewCaroulsel";
import { useEffect, useState } from "react";
import { useGetCrew } from "../../hooks/useGetCrew";
import { mask } from "../../../../utils/mask";
import { EmptyCard } from "../../../../components/EmptyCard/EmptyCard";
import { usePageEventsHandling } from "../../../../contexts/PageEventsContext/PageEventsContext";
import AddIcon from "@mui/icons-material/Add";
import { InvitationModal } from "../../../../components/InvitationModal/InvitationModal";
import { useModalContext } from "../../../../contexts/ModalContext/ModalContext";
import { useNotificationContext } from "../../../../contexts";

export const AircraftCrewPage = () => {
  let { id } = useParams<string>();

  //  Loading and error handling:
  const { onChangeEvent } = usePageEventsHandling();

  //  Fetching data:
  const { getCrew, data, loading, error } = useGetCrew(id || "");

  useEffect(() => {
    getCrew();
  }, []);

  useEffect(() => {
    if (loading) return onChangeEvent(`loading`);
    if (!loading && error) return onChangeEvent("error");
    if (!loading) return onChangeEvent("done");
  }, [loading]);

  //  Callback for the cards:
  const [index, setIndex] = useState<number>(0);

  // Modal context:
  const { toggleModal, setModalContent } = useModalContext("normal");

  //  Notification:
  const { createNotification } = useNotificationContext();

  function onInviteClick() {
    if (!data?.isOwner)
      return createNotification({
        type: "error",
        title:
          "Você não possui nível de acesso suficiente para realizar convites.",
      });
    setModalContent(<InvitationModal aircraftID={id || ""} />);
    toggleModal();
  }

  return (
    <PageContainer
      actualRoute="aircraft-crew"
      header={{
        title: `Tripulação | ${mask("registration", data?.registration || "")}`,
      }}
      mainButton={{
        icon: <AddIcon />,
        onClick: onInviteClick,
      }}
    >
      <S.Container>
        {data ? (
          <>
            <DetailedCrewCard
              aircraftID={id || ""}
              crewMember={data?.crew[index]}
              isOwner={data?.isOwner}
              refetchData={() => getCrew()}
            />
            <SimpleCrewCaroulsel
              isOwner={data?.isOwner}
              crewMembers={data?.crew}
              onChange={setIndex}
            />
          </>
        ) : (
          <EmptyCard
            className="empty-card"
            title={
              "Nenhum tripulante localizado. Utilize o '+' abaixo para verificar as opções disponíveis"
            }
          />
        )}
      </S.Container>
    </PageContainer>
  );
};
