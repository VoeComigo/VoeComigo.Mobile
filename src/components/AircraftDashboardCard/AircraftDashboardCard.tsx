import * as S from "./AircraftDashboardCard.styles";
import noPhoto from "../../assets/no-photo.png";
import { NoFlight } from "./Components/NoFlight/NoFlight";
import { IAircraft } from "../AircraftCard/types";
import { NextFlight } from "./Components/NextFlight/NextFlight";
import { TermsOfUse } from "./Components/TermsOfUse/TermsOfUse";

export const AircraftDashboardCard = ({ className, aircraft }: Props) => {
  return (
    <S.Container className={className}>
      <S.DataGrid>
        <img
          src={!!aircraft.image ? aircraft.image : noPhoto}
          alt="Aircraft Image"
          loading="lazy"
        />
        <div className="text-area">
          <p className="info-chip">{`PR-XXX | C123`}</p>
          <div>
            <p className="fs14 centered">Horas totais</p>
            <p className="fs36 bold centered">{aircraft.totalHours}</p>
          </div>
        </div>
      </S.DataGrid>
      {aircraft.hasOpenningTerm && !aircraft.flightPlan.date && <NoFlight />}
      {aircraft.hasOpenningTerm && aircraft.flightPlan.date && (
        <NextFlight
          date={aircraft.flightPlan.date}
          from={aircraft.flightPlan.from}
          to={aircraft.flightPlan.to}
        />
      )}
      {!aircraft.hasOpenningTerm && (
        <TermsOfUse
          onCheck={console.log}
          onOpenTerm={() => console.log("abrir")}
        />
      )}
    </S.Container>
  );
};

type Props = {
  className?: string;
  aircraft: IAircraft;
};
