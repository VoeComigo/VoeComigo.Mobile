import * as S from "./SimpleCrewCard.styles";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../../../utils/stringAvatar";
import { IAircraftPerson } from "../../../features/aircraft/hooks/useGetCrew";
import { getRoles } from "../../../utils/parserUtils";

export const SimpleCrewCard = ({ className, crewMember }: Props) => {
  if (!crewMember) return <></>;
  return (
    <S.EnchancedCard className={className}>
      <Avatar
        className="avatar"
        {...stringAvatar(crewMember.person.name)}
        src={crewMember.person.photo || ""}
        alt={crewMember.person.name}
      />
      <div className="name-and-email">
        <h1>{crewMember.person.name}</h1>
        <p>{getRoles(crewMember.role)}</p>
      </div>
    </S.EnchancedCard>
  );
};

type Props = {
  className?: string;
  crewMember?: IAircraftPerson;
};
