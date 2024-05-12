import * as S from "../../AircraftDashboardCard.styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const NoFlight = () => {
  return (
    <S.DynamicContent>
      <CalendarMonthIcon />
      <p className="bold">Esta aeronave não possui nenhum voo planejado.</p>
    </S.DynamicContent>
  );
};
