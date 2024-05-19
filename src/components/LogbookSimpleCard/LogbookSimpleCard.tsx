import * as S from "./LogbookSimpleCard.styles";
import { ISimpleLogbookInfo } from "../../features/logbook/hooks/types";
import { Button } from "@mui/material";
import logo from "../../assets/logo.png";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import SouthIcon from "@mui/icons-material/South";

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
            <p className="fs12">{data.landingHour}</p>
            <p>{data.from.icaoCode}</p>
            <p className="fs16 bold">{data.from.airportName}</p>
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
            <p className="fs12">{data.takeOffHour}</p>
            <p>{data.to.icaoCode}</p>
            <p className="fs16 bold">{data.to.airportName}</p>
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
  onClick: (e: string) => void;
};