import * as S from "./AircraftCrewPage.styles";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { useNavigate, useParams } from "react-router-dom";
import { DetailedCrewCard } from "../../../../components/CrewCards/DetailedCrewCard/DetailedCrewCard";
import { SimpleCrewCaroulsel } from "../../../../components/CrewCards/SimpleCrewCaroulsel/SimpleCrewCaroulsel";
import { useEffect, useState } from "react";
import { useGetCrew } from "../../hooks/useGetCrew";
import { mask } from "../../../../utils/mask";
import { EmptyCard } from "../../../../components/EmptyCard/EmptyCard";

export const AircraftCrewPage = () => {
  let { id } = useParams<string>();

  const navigate = useNavigate();

  const { getCrew, data, loading, error } = useGetCrew(id || "");

  useEffect(() => {
    getCrew();
  }, []);

  //  Callback for the cards:
  const [index, setIndex] = useState<number>(0);

  return (
    <PageContainer
      actualRoute="aircraft-crew"
      header={{
        title: `Tripulação | ${mask("registration", data?.registration || "")}`,
      }}
    >
      <S.Container>
        {data ? (
          <>
            <DetailedCrewCard
              aircraftID={id || ""}
              crewMember={data?.crew[index]}
              isOwner={data?.isOwner}
            />
            <SimpleCrewCaroulsel
              isOwner={data?.isOwner}
              crewMembers={data?.crew}
              onChange={setIndex}
            />
          </>
        ) : (
          <EmptyCard
            title={
              "Nenhum tripulante localizado. Utilize o '+' abaixo para verificar as opções disponíveis"
            }
          />
        )}
      </S.Container>
    </PageContainer>
  );
};
