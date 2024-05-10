import * as S from "./AircraftActionCards.styles";
import noPhoto from "../../assets/no-photo.png";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export const AircraftActionCard = ({
  className,
  registry,
  model,
  role,
  image,
  type,
}: Props) => {
  return (
    <S.Container>
      <S.DataGrid>
        <img
          src={!!image ? image : noPhoto}
          alt="Aircraft Image"
          loading="lazy"
        />
        <div className="text-area">
          <p className="info-chip">{`PR-XXX | C123`}</p>
          <div>
            <p className="fs14 centered">Horas totais</p>
            <p className="fs36 bold centered">1154:15</p>
          </div>
        </div>
      </S.DataGrid>
      <S.DynamicContent>
        <AutoStoriesIcon />
        <p>
          Esta aeronave ainda não possui registros do diário de bordo digital.
        </p>
      </S.DynamicContent>
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
