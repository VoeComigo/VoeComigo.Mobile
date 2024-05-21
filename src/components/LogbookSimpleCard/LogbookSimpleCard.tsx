import * as S from "./LogbookSimpleCard.styles";
import { ISimpleLogbookInfo } from "../../features/logbook/hooks/types";
import { Button } from "@mui/material";
import logo from "../../assets/logo.png";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import SouthIcon from "@mui/icons-material/South";
import { mask } from "../../utils/mask";

export const LogbookSimpleCard = ({ className, data, onClick }: Props) => {
  return (
    <S.Container className={className}>
      <img src={logo} className="logo" alt="Aircraft Image" loading="lazy" />
      <S.Content>
        <span className="icon-row">
          <div className="green-icon">
            <FlightTakeoffIcon />
          </div>
          <span>
            <p className="fs12 bold">{mask("time", data.landingHour)}</p>
            <p className="bold">{data.from.icaoCode}</p>
            <p className="fs16">{data.from.airportName}</p>
          </span>
        </span>
        <div className="grey-icon">
          <SouthIcon />
        </div>
        <span className="icon-row">
          <div className="yellow-icon">
            <FlightLandIcon />
          </div>
          <span>
            <p className="fs12 bold">{mask("time", data.takeOffHour)}</p>
            <p className="bold">{data.to.icaoCode}</p>
            <p className="fs16">{data.to.airportName}</p>
          </span>
        </span>
      </S.Content>
      <div className="bottom-area">
        <Button
          className="primary"
          type="submit"
          variant="contained"
          //disabled={loading}
          disableElevation
          onClick={() => onClick(data.id)}
        >
          DETALHES
        </Button>
      </div>
    </S.Container>
  );
};

type Props = {
  className?: string;
  data: ISimpleLogbookInfo;
  onClick: (logbookID: string) => void;
};
