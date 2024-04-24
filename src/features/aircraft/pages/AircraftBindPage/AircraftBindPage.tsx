import * as S from "./AircraftBindPage.styles";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { useNavigate } from "react-router-dom";
import { Accordion, AircraftActionCard } from "../../../../components";

export const AircraftBindPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer
      actualRoute="aircraft"
      header={{
        title: "Vincular",
        subtitle:
          "Forneça a matrícula e a chave de acesso da aeronave ou aceite um convite para vincular-se como um tripulante",
      }}
    >
      <S.Container>
        <Accordion title="Localizar">
          <>
            <AircraftActionCard registry="PT-XXX" model="C172" type="find" />
          </>
        </Accordion>
        <Accordion title="Convites (2)">
          <>
            <AircraftActionCard
              registry="PT-XXX"
              model="C172"
              role={"MECÂNICO"}
              type="bind"
            />
          </>
        </Accordion>
      </S.Container>
    </PageContainer>
  );
};
