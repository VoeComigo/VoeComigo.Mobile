import * as S from "./LogbookDetailsModal.styles";
import { useGetLogbookDetails } from "../../features/logbook/hooks";
import { useEffect } from "react";
import { Chip } from "../Chip/Chip";
import { mask } from "../../utils/mask";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import GroupsIcon from "@mui/icons-material/Groups";
import ScaleIcon from "@mui/icons-material/Scale";
import { GenericInformationContainer } from "../GenericInformationContainer/GenericInformationContainer";
import { generateCardInfo } from "./LogbookDetailsModal.utils";
import { Carousel } from "../Carousel/Carousel";
import { SimpleCrewCard } from "../CrewCards/SimpleCrewCard/SimpleCrewCard";
import { Card } from "../Card/Card";

export const LogbookDetailsModal = ({ className, id }: Props) => {
  const { getLogbookDetails, data, loading, error } = useGetLogbookDetails();

  useEffect(() => {
    getLogbookDetails([
      { aircraftID: id.aircraftID },
      { logbookID: id.logbookID },
    ]);
  }, [id]);

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
      <S.Card>
        <GenericInformationContainer
          data={generateCardInfo({
            engineStartUp: data?.engineStartUp || "",
            engineCut: data?.engineCut || "",
            landingQuantity: data?.landingQuantity || 0,
          })}
          textProps={{ titleSize: "14", textSize: "14" }}
        />
        <p className="fs14 bold text-centered">{`Total: ${data?.totalHour}`}</p>
      </S.Card>
      <Carousel slidesAmount={data?.crew.length || 0} hasNavigationDots={false}>
        {data?.crew.map((item) => (
          <SimpleCrewCard
            key={item.id}
            crewMember={{ id: item.id, role: "", person: item.person }}
          />
        ))}
      </Carousel>
      <Carousel
        slidesAmount={data?.discrepancy.length || 0}
        hasNavigationDots={false}
      >
        {data?.discrepancy.map((item) => (
          <Card key={item.id}>
            <p className="fs16 bold">{item.report}</p>
            {item.correctiveAction && (
              <p className="fs16">{item.correctiveAction}</p>
            )}
          </Card>
        ))}
      </Carousel>
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
