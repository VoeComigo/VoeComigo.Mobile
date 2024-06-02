import * as S from "./LogbookCreatePage.styles";
import { voeComigoTheme as theme } from "../../../../theme/globalTheme";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { usePageEventsHandling } from "../../../../contexts/PageEventsContext/PageEventsContext";
import { useNotificationContext } from "../../../../contexts";
import { useNavigate, useParams } from "react-router-dom";
import { useModalContext } from "../../../../contexts/ModalContext/ModalContext";
import { mask } from "../../../../utils/mask";
import { ProgressiveButton } from "../../../../components/ProgressiveButton/ProgressiveButton";
import { ProgressiveSubmitButton } from "../../../../components/ProgressiveSubmitButton/ProgressiveSubmitButton";
// Icons
import FeedIcon from "@mui/icons-material/Feed";
import ChecklistIcon from "@mui/icons-material/Checklist";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import EngineeringIcon from "@mui/icons-material/Engineering";

export const LogbookCreatePage = () => {
  //  Getting url params:
  const { aircraftID, registration } = useParams<{
    aircraftID: string;
    registration: string;
  }>();

  //  Navigation:
  const navigate = useNavigate();

  //  Loading and error handling:
  const { onChangeEvent } = usePageEventsHandling();

  //  Notification:
  const { createNotification } = useNotificationContext();

  // Modal context:
  const { toggleModal, setModalContent } = useModalContext("bottom");

  return (
    <S.Container>
      <S.BlueArea></S.BlueArea>
      <S.OptionsArea>
        <button
          className="action-button"
          onClick={() => navigate(`/logbook/${aircraftID}/${registration}`)}
        >
          <ArrowBackIosIcon />
        </button>
        <div className="title-area">
          <p className="fs28 grey bold">DIÁRIO DE BORDO</p>
          <p className="fs22 grey">
            {mask("registration", registration).toUpperCase()}
          </p>
        </div>

        <div className="buttons">
          <ProgressiveButton
            title={"Informações básicas"}
            detailsColor={theme.primary}
            iconProps={{
              icon: <FeedIcon />,
            }}
            barProps={{
              min: 4,
              max: 5,
            }}
            onClick={() => console.log("asd")}
          />
          <ProgressiveButton
            title={"Informações do Registro"}
            detailsColor={theme.yellow4}
            iconProps={{
              icon: <ChecklistIcon />,
            }}
            barProps={{
              min: 4,
              max: 5,
            }}
            onClick={() => console.log("asd")}
          />
          <ProgressiveButton
            title={"Tripulação"}
            detailsColor={theme.green4}
            iconProps={{
              icon: <Diversity3Icon />,
            }}
            barProps={{
              min: 4,
              max: 5,
            }}
            onClick={() => console.log("asd")}
          />
          <ProgressiveButton
            title={"Situação Técnica da Aeronave"}
            detailsColor={theme.purple3}
            iconProps={{
              icon: <EngineeringIcon />,
            }}
            barProps={{
              min: 4,
              max: 5,
            }}
            onClick={() => console.log("asd")}
          />
        </div>
        <div className="submit-container">
          <ProgressiveSubmitButton
            percentage={100}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </S.OptionsArea>
    </S.Container>
  );
};
