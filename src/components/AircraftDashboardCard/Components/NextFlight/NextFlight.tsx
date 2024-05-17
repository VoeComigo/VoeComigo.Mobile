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
        {`Próximo voo: ${mask("date", date)}`}
        <CalendarMonthIcon className="calendar-icon" />
      </p>

      <S.FlightContent>
        <div className="flight-area">
          <span className="green-icon">
            <FlightTakeoffIcon />
          </span>
          <div>
            <p className="bold">{from.icaoCode}</p>
            <p className="text">{from.airportName}</p>
          </div>
        </div>

        <div className="flight-area">
          <span className="yellow-icon">
            <FlightLandIcon />
          </span>
          <div>
            <p className="bold">{to.icaoCode}</p>
            <p className="text">{to.airportName}</p>
          </div>
        </div>
      </S.FlightContent>
    </S.DynamicContent>
  );
};

type props = {
  date: string;
  from: IFlightData;
  to: IFlightData;
};
