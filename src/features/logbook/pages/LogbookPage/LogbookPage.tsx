import * as S from "./LogbookPage.styles";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { useEffect, useState } from "react";
import { usePageEventsHandling } from "../../../../contexts/PageEventsContext/PageEventsContext";
import { useNavigate, useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Carousel } from "../../../../components/Carousel/Carousel";
import { mask } from "../../../../utils/mask";
import { LogbookSimpleCard } from "../../../../components/LogbookSimpleCard/LogbookSimpleCard";
import { Chip } from "../../../../components/Chip/Chip";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { voeComigoTheme as theme } from "../../../../theme/globalTheme";
import { useGetLogbook } from "../../hooks";
import { useModalContext } from "../../../../contexts/ModalContext/ModalContext";
import { LogbookDetailsModal } from "../../../../components/LogbookDetailsModal/LogbookDetailsModal";
import { LogbookFilter } from "../../../../components/LogbookFilter/LogbookFilter";
import { getFilterQueryParam } from "./LogbookPage.utils";

export const LogbookPage = () => {
  const { aircraftID, registration } = useParams<{
    aircraftID: string;
    registration: string;
  }>();

  //  Navigation handling:
  const navigate = useNavigate();

  //  Loading and error handling:
  const { onChangeEvent } = usePageEventsHandling();

  //  Filtering result:
  const [filter, setFilter] = useState<string>();

  //  Data fetching:
  const { getLogbook, data, loading, error } = useGetLogbook(
    aircraftID || "",
    filter
  );
  useEffect(() => {
    getLogbook();
  }, []);

  useEffect(() => {
    if (loading) return onChangeEvent("loading");
    if (!loading && error) return onChangeEvent("error");
    if (!loading) return onChangeEvent("done");
  }, [loading]);

  //  Refetch when filter change:
  useEffect(() => {
    if (filter) getLogbook();
  }, [filter]);

  const { toggleModal, setModalContent, setModalStyle } = useModalContext();

  function onShowDetails(id: string) {
    setModalStyle("bottom");
    setModalContent(
      <LogbookDetailsModal
        id={{ logbookID: id, aircraftID: aircraftID || "" }}
      />
    );
    toggleModal();
  }

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
      <LogbookFilter
        onChangeFilter={(e) => setFilter(getFilterQueryParam(e))}
      />
      <S.Container>
        {data &&
          data.map((logbookMain) => {
            return (
              <S.LogbookWrapper key={logbookMain.date}>
                <Chip
                  icon={<CalendarMonthIcon />}
                  text={mask("date", logbookMain.date)}
                  textProps={{ size: theme.fontSize14, color: theme.lightGrey }}
                  iconProps={{ size: "18", color: theme.lightGrey }}
                  backgroundColor={theme.lightBlue}
                />
                <Carousel
                  slidesAmount={logbookMain.logbook.length}
                  hasNavigationDots={true}
                  hasInfiniteScrolling={false}
                >
                  {logbookMain.logbook.map((logbook) => {
                    return (
                      <LogbookSimpleCard
                        key={logbook.id}
                        data={{ ...logbook }}
                        onClick={onShowDetails}
                      />
                    );
                  })}
                </Carousel>
              </S.LogbookWrapper>
            );
          })}
      </S.Container>
    </PageContainer>
  );
};
