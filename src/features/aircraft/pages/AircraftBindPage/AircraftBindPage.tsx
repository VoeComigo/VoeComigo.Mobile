import * as S from "./AircraftBindPage.styles";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { useNavigate } from "react-router-dom";
import { AircraftActionCard } from "../../../../components";

export const AircraftBindPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer
      actualRoute="aircraft"
      header={{
        title: "Convites",
      }}
    >
      <S.Container>
        <div>
          <AircraftActionCard
            registry="PT-XXX"
            model="C172"
            role={"MECÂNICO"}
            type="bind"
          />
          <AircraftActionCard
            registry="PT-XXX"
            model="C172"
            role={"MECÂNICO"}
            type="bind"
          />
          <AircraftActionCard
            registry="PT-XXX"
            model="C172"
            role={"MECÂNICO"}
            type="bind"
          />
        </div>
      </S.Container>
    </PageContainer>
  );
};
