import * as S from "./SimpleCrewCaroulsel.styles";
import { SimpleCrewCard } from "../SimpleCrewCard/SimpleCrewCard";
import { IAircraftPerson } from "../../../features/aircraft/hooks/useGetCrew";
import { Carousel } from "../../Carousel/Carousel";

export const SimpleCrewCaroulsel = ({ crewMembers, onChange }: Prop) => {
  return (
    <S.Wrapper>
      <Carousel slidesAmount={crewMembers?.length || 0} onChange={onChange}>
        {crewMembers &&
          crewMembers.map((el) => (
            <SimpleCrewCard key={el.id} crewMember={el} />
          ))}
      </Carousel>
    </S.Wrapper>
  );
};

type Prop = {
  isOwner?: boolean;
  crewMembers?: IAircraftPerson[];
  onChange: (e: number) => void;
};
