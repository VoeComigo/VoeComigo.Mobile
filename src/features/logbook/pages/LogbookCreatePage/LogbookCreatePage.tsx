import * as S from "./LogbookCreatePage.styles";
import { useMemo, useState } from "react";
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
//  Forms and types:
import { BasicInformation, IBasicInfoForm } from "./Form/BasicInformation";
import { getFilledAmount, getItemsAmount } from "./LogbookCreatePage.utils";
import {
  BASIC_INFORMATION_DEFAULT,
  BASIC_REGISTRY_DEFAULT,
} from "./Form/Form.defaults";
import {
  IBasicRegistryForm,
  RegistryInformation,
} from "./Form/RegistryInformation";

type ModalTypes =
  | "basic-information"
  | "registry-information"
  | "crew-information"
  | "technical-information";

export const LogbookCreatePage = () => {
  //  Getting url params:
  const { aircraftID, registration } = useParams<{
    aircraftID: string;
    registration: string;
  }>();

  // Input that will be used in the create/update endpoint:
  const [basicInfo, setBasicInfo] = useState<IBasicInfoForm>(
    BASIC_INFORMATION_DEFAULT
  );
  const [registryInfo, setRegistryInfo] = useState<IBasicRegistryForm>(
    BASIC_REGISTRY_DEFAULT
  );

  //  Navigation:
  const navigate = useNavigate();

  //  Loading and error handling:
  const { onChangeEvent } = usePageEventsHandling();

  //  Notification:
  const { createNotification } = useNotificationContext();

  // Modal context and handler:
  const { toggleModal, setModalContent } = useModalContext("bottom");
  function modalHandler(style: ModalTypes) {
    if (style === "basic-information") {
      setModalContent(
        <BasicInformation
          defaultValues={basicInfo}
          registration={registration || ""}
          onSubmit={setBasicInfo}
        />
      );
      return toggleModal();
    }
    if (style === "registry-information") {
      setModalContent(
        <RegistryInformation
          defaultValues={registryInfo}
          registration={registration || ""}
          onSubmit={setRegistryInfo}
        />
      );
      return toggleModal();
    }
    if (style === "crew-information") {
      /* setModalContent(
        <BasicInformation
          defaultValues={basicInfo}
          registration={registration || ""}
          onSubmit={setBasicInfo}
        />
      ); */
      return toggleModal();
    }
    if (style === "technical-information") {
      /* setModalContent(
        <BasicInformation
          defaultValues={basicInfo}
          registration={registration || ""}
          onSubmit={setBasicInfo}
        />
      ); */
      return toggleModal();
    }
    return null;
  }

  //  Submit button handler:
  const validatorPercentage = useMemo(() => {
    const { basicPercentage, registryPercentage } = {
      basicPercentage:
        getFilledAmount(basicInfo) === getItemsAmount(basicInfo) ? 1 : 0,
      registryPercentage:
        getFilledAmount(registryInfo) === getItemsAmount(registryInfo) ? 1 : 0,
    };
    return ((basicPercentage + registryPercentage) * 100) / 4;
  }, [basicInfo, registryInfo]);

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
              min: getFilledAmount(basicInfo),
              max: getItemsAmount(basicInfo),
            }}
            onClick={() => modalHandler("basic-information")}
          />
          <ProgressiveButton
            title={"Informações do Registro"}
            detailsColor={theme.yellow4}
            iconProps={{
              icon: <ChecklistIcon />,
            }}
            barProps={{
              min: getFilledAmount(registryInfo),
              max: getItemsAmount(registryInfo),
            }}
            onClick={() => modalHandler("registry-information")}
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
            onClick={() => modalHandler("crew-information")}
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
            onClick={() => modalHandler("technical-information")}
          />
        </div>
        <div className="submit-container">
          <ProgressiveSubmitButton
            percentage={validatorPercentage}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </S.OptionsArea>
    </S.Container>
  );
};
