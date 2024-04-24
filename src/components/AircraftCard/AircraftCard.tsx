import * as S from "./AircraftCard.styles";
import Button from "@mui/material/Button";
import { Card } from "../Card/Card";
import { IAircraft } from "./types";
import { ImageContainer, InformationContainer } from ".";
import { useNavigate } from "react-router-dom";

export const AircraftCards = ({ className, aircraftData }: Props) => {
  const navigate = useNavigate();

  return (
    <Card className={className}>
      <S.Content>
        <ImageContainer {...aircraftData} />
        <InformationContainer {...aircraftData} />
        <Button
          className="primary"
          type="submit"
          variant="contained"
          onClick={() => navigate(`/aircraft-crew/${aircraftData.id}`)}
          disableElevation
        >
          TRIPULAÇÃO
        </Button>
      </S.Content>
    </Card>
  );
};

type Props = {
  className?: string;
  aircraftData: IAircraft;
};
