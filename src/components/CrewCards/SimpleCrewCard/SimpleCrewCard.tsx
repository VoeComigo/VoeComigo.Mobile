import * as S from "./SimpleCrewCard.styles";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../../../utils/stringAvatar";
import { IAircraftPerson } from "../../../features/aircraft/hooks/useGetCrew";

export const SimpleCrewCard = ({ crewMember }: Prop) => {
  if (!crewMember) return <></>;
  return (
    <S.EnchancedCard>
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
    </S.EnchancedCard>
  );
};

type Prop = {
  crewMember?: IAircraftPerson;
};
