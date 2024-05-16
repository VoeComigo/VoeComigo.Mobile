import * as S from "./AircraftDashboardCard.styles";
import noPhoto from "../../assets/no-photo.png";
import { NoFlight } from "./Components/NoFlight/NoFlight";
import { IAircraft } from "../AircraftCard/types";
import { NextFlight } from "./Components/NextFlight/NextFlight";
import { TermsOfUse } from "./Components/TermsOfUse/TermsOfUse";
import { mask } from "../../utils/mask";
import { IAircrafTermsChange } from "../../features/dashboard/pages/DashboardPage/DashboardPage.utils";
import { useState } from "react";

export const AircraftDashboardCard = ({
  className,
  aircraft,
  onTermInteraction,
}: Props) => {
  const [accepted, setAccepted] = useState<boolean>(false);
  function handleTermsOfUse(e?: boolean) {
    if (e !== undefined) {
      setAccepted(e);
      return onTermInteraction({
        id: aircraft.id,
        openModal: false,
        accepted: e,
      });
    }
    return onTermInteraction({
      id: aircraft.id,
      openModal: true,
      accepted: accepted,
    });
  }
  return (
    <S.Container className={className}>
      <S.DataGrid>
        <img
          src={!!aircraft.image ? aircraft.image : noPhoto}
          alt="Aircraft Image"
          loading="lazy"
        />
        <div className="text-area">
          <p className="info-chip">{`${mask(
            "registration",
            aircraft.registration
          )} | ${aircraft.model.description}`}</p>
          <div>
            <p className="fs14 centered">Horas totais</p>
            <p className="fs36 bold centered">{aircraft.totalHours}</p>
          </div>
        </div>
      </S.DataGrid>
      {aircraft.hasOpeningTerm && !aircraft.flightPlan && <NoFlight />}
      {aircraft.hasOpeningTerm && aircraft.flightPlan && (
        <NextFlight
          date={aircraft.flightPlan.date}
          from={aircraft.flightPlan.from}
          to={aircraft.flightPlan.to}
        />
      )}
      {!aircraft.hasOpeningTerm && (
        <TermsOfUse
          onOpenTerm={() => handleTermsOfUse()}
          onCheck={handleTermsOfUse}
        />
      )}
    </S.Container>
  );
};

type Props = {
  className?: string;
  aircraft: IAircraft;
  onTermInteraction: (e: IAircrafTermsChange) => void;
};
