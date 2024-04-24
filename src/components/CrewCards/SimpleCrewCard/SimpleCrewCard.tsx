import * as S from "./SimpleCrewCard.styles";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../../../utils/stringAvatar";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { IAircraftPerson } from "../../../features/aircraft/hooks/useGetCrew";

export const SimpleCrewCard = ({ crewMember }: Prop) => {
  if (!crewMember) {
    return (
      <S.EnchancedCard className="no-data">
        <S.NoContentContainer>
          <div className="avatar-area">
            <InfoOutlinedIcon className="icon-blue" />
            <p className="no-content-text">
              Adicione tripulantes para acessar às informações detalhadas
            </p>
          </div>
        </S.NoContentContainer>
      </S.EnchancedCard>
    );
  } else {
    return (
      <S.EnchancedCard>
        <S.Container>
          <Avatar
            className="avatar"
            {...stringAvatar(crewMember.person.name)}
            src={crewMember.person.photo || ""}
            alt={crewMember.person.name}
          />
          <div className="name-and-email">
            <h1>{crewMember.person.name}</h1>
            <p>{crewMember.role}</p>
          </div>
        </S.Container>
      </S.EnchancedCard>
    );
  }
};

export const SimpleAddCard = () => {
  return (
    <S.EnchancedCard className="no-data">
      <S.NoContentContainer>
        <p className="no-content-text">Adicionar tripulante</p>
        <AddCircleOutlineOutlinedIcon className="icon-blue" />
      </S.NoContentContainer>
    </S.EnchancedCard>
  );
};

type Prop = {
  crewMember?: IAircraftPerson;
};
