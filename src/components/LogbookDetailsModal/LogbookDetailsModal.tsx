import * as S from "./LogbookDetailsModal.styles";
import { useGetLogbookDetails } from "../../features/logbook/hooks";
import { useEffect, useMemo } from "react";
import { Chip } from "../Chip/Chip";
import { mask } from "../../utils/mask";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import GroupsIcon from "@mui/icons-material/Groups";
import ScaleIcon from "@mui/icons-material/Scale";
import { GenericInformationContainer } from "../GenericInformationContainer/GenericInformationContainer";
import { generateCardInfo, getStyleClass } from "./LogbookDetailsModal.utils";
import { Carousel } from "../Carousel/Carousel";
import { SimpleCrewCard } from "../CrewCards/SimpleCrewCard/SimpleCrewCard";
import { Card } from "../Card/Card";
import { LogbookCrewCard } from "../LogbookCrewCard/LogbookCrewCard";
import { getOnboardFunction } from "../../utils/parserUtils";

export const LogbookDetailsModal = ({ className, id }: Props) => {
  const { getLogbookDetails, data, loading, error } = useGetLogbookDetails();

  useEffect(() => {
    getLogbookDetails([
      { aircraftID: id.aircraftID },
      { logbookID: id.logbookID },
    ]);
  }, [id]);

  const mainInfoContent = useMemo(() => {
    if (data)
      return generateCardInfo({
        engineStartUp: data.engineStartUp,
        engineCut: data.engineCut,
        landingQuantity: data.landingQuantity,
        cycleQuantity: data.cycleQuantity,
        takeOffHour: data.takeOffHour,
        landingHour: data.landingHour,
        totalHour: data.totalHour,
        dayTime: data.dayTime,
        nightly: data.nightly,
        ifr: data.ifr,
        ifrCapota: data.ifrCapota,
        flightNature: data.flightNature,
      });
    return [];
  }, [data]);

  if (loading)
    return (
      <S.LoaderContainer>
        <S.Spinner />
      </S.LoaderContainer>
    );

  return (
    <S.Container className={className}>
      <div>
        <Chip
          className="chip-item"
          text={`${mask("registration", data?.aircraft.registration)} | ${
            data?.aircraft.model.description
          }`}
          textProps={{ size: "14", color: "#fdfdfd" }}
          backgroundColor="#0083FF"
        />
        <S.InfoContainer>
          <p className="fs14 bold">{`${data?.from.icaoCode} - ${data?.to.icaoCode}`}</p>
          <p className="fs14 bold">{`${mask("date", data?.date)}`}</p>
        </S.InfoContainer>
        <S.InfoContainer>
          <p className="fs14 bold flex center">
            <LocalGasStationIcon />
            {`${data?.fuelQuantity} L`}
          </p>
          <p className="fs14 bold flex center">
            <GroupsIcon />
            {`${data?.pob}`}
          </p>
          <p className="fs14 bold flex center">
            <ScaleIcon />
            {`${data?.load} KG`}
          </p>
        </S.InfoContainer>
      </div>

      <div>
        <Chip
          className="chip-item"
          text="Informações do registro"
          textProps={{ size: "14", color: "#fdfdfd" }}
          backgroundColor="#0083FF"
        />
        <Carousel
          className="main-info-carousel"
          slidesAmount={mainInfoContent.length}
          //hasNavigationDots={false}
          hasInfiniteScrolling={false}
        >
          {mainInfoContent.map((item) => (
            <S.MainContainer>
              {item.map((el) => {
                return (
                  <span className="flex col center">
                    <p className="bold fs14 flex center icon16">
                      {el.icon}
                      {el.title}
                    </p>
                    <p>{el.value}</p>
                  </span>
                );
              })}
            </S.MainContainer>
          ))}
        </Carousel>
      </div>

      <div>
        <Chip
          className="chip-item"
          text="Tripulação"
          textProps={{ size: "14", color: "#fdfdfd" }}
          backgroundColor="#0083FF"
        />
        <Carousel
          slidesAmount={data?.crew.length || 0}
          hasNavigationDots={false}
          hasInfiniteScrolling={false}
        >
          {data?.crew.map((item) => (
            <LogbookCrewCard
              key={item.id}
              member={{
                code: `CANAC: ${item.person.anacCode}`,
                name: item.person.name,
                photo: item.person.photo || "",
              }}
              information={{
                main: getOnboardFunction(item.onBoardFunction),
                aditional: `Apresentação às ${mask(
                  "time",
                  item.presentation
                )}hs`,
              }}
              status={{
                valid: item.isSigned,
                label: item.isSigned
                  ? `Assinado em ${mask("date-time", item.signedAt)}`
                  : "Não assinado",
              }}
            />
          ))}
        </Carousel>
      </div>

      {data?.discrepancy && data.discrepancy.length > 0 && (
        <div>
          <Chip
            className="chip-item"
            text="Situação técnica da aeronave"
            textProps={{ size: "14", color: "#fdfdfd" }}
            backgroundColor="#0083FF"
          />
          <Carousel
            slidesAmount={data?.discrepancy.length || 0}
            hasNavigationDots={false}
            hasInfiniteScrolling={false}
          >
            {data?.discrepancy.map((item) => (
              <Card key={item.id}>
                <p className="fs14">
                  <b>{"Discrepância: "}</b>
                  {item.report}
                </p>
                {item.correctiveAction && (
                  <p className="fs14 divided">
                    <b>{`Ação corretiva em ${mask(
                      "date-time",
                      item.correctiveActionDate
                    )}hs: `}</b>
                    {item.correctiveAction}
                  </p>
                )}
              </Card>
            ))}
          </Carousel>
        </div>
      )}
      <div className="spacer"></div>
    </S.Container>
  );
};

type Props = {
  className?: string;
  id: {
    logbookID: string;
    aircraftID: string;
  };
};
