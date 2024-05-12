import { mask } from "../../../../utils/mask";
import { IFlightData } from "../../../AircraftCard/types";
import * as S from "../../AircraftDashboardCard.styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";

export const NextFlight = ({ date, from, to }: props) => {
  return (
    <S.DynamicContent className="flex-col">
      <p className="next-flight-title">
        <CalendarMonthIcon />
        {`Próximo voo: ${mask("date", date)}`}
      </p>

      <S.FlightContent>
        <p className="take-off">
          <FlightTakeoffIcon />
          {`${from.icaoCode} | ${from.name}`}
        </p>
        <p className="landing">
          {`${to.icaoCode} | ${to.name}`}
          <FlightLandIcon />
        </p>
      </S.FlightContent>
    </S.DynamicContent>
  );
};

type props = {
  date: string;
  from: IFlightData;
  to: IFlightData;
};
