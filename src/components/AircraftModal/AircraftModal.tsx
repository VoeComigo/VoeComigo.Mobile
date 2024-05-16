import * as S from "./AircraftModal.styles";
import { InformationButton } from "../InformationButton/InformationButton";
import { modalButtonContent } from "./AircraftModal.utils";
import { useNavigate } from "react-router-dom";

export const AircraftModal = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <InformationButton
        {...modalButtonContent.bind}
        onClick={() => navigate("/aircraft-bind")}
      />
      <InformationButton
        {...modalButtonContent.create}
        onClick={() => navigate("/aircraft-create")}
      />
    </S.Container>
  );
};
