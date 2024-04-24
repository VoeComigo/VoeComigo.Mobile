import * as S from "./AircraftActionCards.styles";
import { Card } from "..";
import noPhoto from "../../assets/no-photo.png";
import { Button } from "@mui/material";

export const AircraftActionCard = ({
  className,
  registry,
  model,
  role,
  image,
  type,
}: Props) => {
  return (
    <S.Container className={className}>
      <span className="info-chip">{`${registry} | ${model}${
        role ? ` | ${role}` : ""
      }`}</span>
      <Card className="action-card">
        <div className="action-card-content">
          <img
            src={!!image ? image : noPhoto}
            alt="Aircraft Image"
            loading="lazy"
          />
          <div className="button-area">
            <Button
              type="button"
              className="secondary"
              variant="outlined"
              disableElevation
            >
              {"Recusar"}
            </Button>
            <Button
              className="primary"
              type="submit"
              variant="contained"
              disableElevation
            >
              {type === "bind" ? "Vincular" : "Confirmar"}
            </Button>
          </div>
        </div>
      </Card>
    </S.Container>
  );
};

type Props = {
  className?: string;
  registry: string;
  model: string;
  role?: string;
  image?: string;
  type: "find" | "bind";
};
