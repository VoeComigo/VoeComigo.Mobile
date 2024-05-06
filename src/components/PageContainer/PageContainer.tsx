import * as S from "./PageContainer.styles";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { MainButtonProps, MainMenu, RouteMapper } from "../MainMenu/MainMenu";
import { Modal, useModalController } from "../../hooks";
import { InformationButton } from "..";
import { useNavigate } from "react-router-dom";
import { modalButtonContent } from "./PageContainer.utils";
import { InvitationModal } from "../InvitationModal/InvitationModal";

export const PageContainer = ({
  header,
  children,
  hasMainMenu = true,
  actualRoute = "dashboard",
}: Props) => {
  const navigate = useNavigate();
  const { toggleModal, controller } = useModalController();

  function getMainMenuProps() {
    if (actualRoute === "aircraft" || actualRoute === "aircraft-crew") {
      return {
        mainButtonProps: {
          icon: <AddOutlinedIcon />,
          onClick: toggleModal,
        } as MainButtonProps,
      };
    }
    return undefined;
  }

  function getModalProps(): {
    modalStyle: "ticket" | "normal" | undefined;
    element: JSX.Element;
  } {
    if (actualRoute === "aircraft")
      return {
        modalStyle: "ticket",
        element: (
          <div className="modal-content-aircraft">
            <InformationButton
              {...modalButtonContent.bind}
              onClick={() => navigate("/aircraft-bind")}
            />
            <InformationButton
              {...modalButtonContent.create}
              onClick={() => navigate("/aircraft-create")}
            />
          </div>
        ),
      };
    if (actualRoute === "aircraft-crew")
      return {
        modalStyle: "normal",
        element: <InvitationModal />,
      };
    return { modalStyle: undefined, element: <></> };
  }

  return (
    <>
      <S.Container>
        <div className="header-section">
          <h1>{header.title}</h1>
          {header.subtitle && <h2>{header.subtitle}</h2>}
        </div>
        {children}
        <Modal {...controller} contentStyle={getModalProps().modalStyle}>
          {getModalProps().element}
        </Modal>
      </S.Container>
      {hasMainMenu && (
        <MainMenu actualRoute={actualRoute} {...getMainMenuProps()} />
      )}
    </>
  );
};

type Props = {
  header: HeaderProps;
  children: JSX.Element;
  hasMainMenu?: boolean;
  actualRoute?: RouteMapper;
};

type HeaderProps = {
  title: string;
  subtitle?: string;
};
