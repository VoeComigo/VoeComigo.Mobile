import * as S from "./LogbookPage.styles";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { useEffect } from "react";
import { usePageEventsHandling } from "../../../../contexts/PageEventsContext/PageEventsContext";
import { useNavigate, useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Carousel } from "../../../../components/Carousel/Carousel";
import { Modal, useModalController } from "../../../../hooks";
import { mask } from "../../../../utils/mask";
import { LogbookSimpleCard } from "../../../../components/LogbookSimpleCard/LogbookSimpleCard";
import { Chip } from "../../../../components/Chip/Chip";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { voeComigoTheme as theme } from "../../../../theme/globalTheme";

export const LogbookPage = () => {
  const { aircraftID, registration } = useParams<{
    aircraftID: string;
    registration: string;
  }>();

  //  Navigation handling:
  const navigate = useNavigate();

  //  Loading and error handling:
  const { onChangeEvent } = usePageEventsHandling();

  ///  Data fetching:
  /* const { getProfile, data, loading, error } = useGetProfile(); */

  /* useEffect(() => {
    // Get logbook
  }, []); */

  /*   useEffect(() => {
    if (dataLoading) return onChangeEvent("loading");
    if (!dataLoading && dataErrors) return onChangeEvent("error");
    if (!dataLoading) return onChangeEvent("done");
  }, [dataLoading]);
 */

  //  Modal controller:
  const { toggleModal, controller } = useModalController();

  return (
    <PageContainer
      actualRoute="logbook"
      header={{
        title: `Diário de bordo | ${mask("registration", registration)}`,
      }}
      mainButton={{
        icon: <AddIcon />,
        onClick: () => console.log("CRIAR NOVO LOGBOOK"),
      }}
    >
      <S.Container>
        <Chip
          icon={<CalendarMonthIcon />}
          text="10/04/2024"
          textProps={{ size: theme.fontSize14, color: theme.lightGrey }}
          iconProps={{ size: "18", color: theme.lightGrey }}
          backgroundColor={theme.lightBlue}
        />
        <LogbookSimpleCard
          data={{
            id: "123",
            to: { icaoCode: "SBBH", airportName: "Aeroporto da Pampulha" },
            from: { icaoCode: "SBSP", airportName: "Aeroporto de Congonhas" },
            takeOffHour: "08:30",
            landingHour: "11:20",
          }}
          onClick={console.log}
        />
        <Modal {...controller}>
          <span></span>
        </Modal>
      </S.Container>
    </PageContainer>
  );
};
