import * as S from "./PageContainer.styles";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { MainButtonProps, MainMenu, RouteMapper } from "../MainMenu/MainMenu";
import { Modal, useModalController } from "../../hooks";
import { InformationButton } from "..";
import { useNavigate } from "react-router-dom";
import { modalButtonContent } from "./PageContainer.utils";

export const PageContainer = ({
  header,
  children,
  hasMainMenu = true,
  actualRoute = "dashboard",
}: Props) => {
  const navigate = useNavigate();
  const { toggleModal, controller } = useModalController();

  function getMainMenuProps() {
    if (actualRoute === "aircraft") {
      return {
        mainButtonProps: {
          icon: <AddOutlinedIcon />,
          onClick: toggleModal,
        } as MainButtonProps,
      };
    }
    return undefined;
  }

  return (
    <>
      <S.Container>
        <div className="header-section">
          <h1>{header.title}</h1>
          {header.subtitle && <h2>{header.subtitle}</h2>}
        </div>
        {children}
        <Modal {...controller} className={"content-area"} contentStyle="ticket">
          <div className="modal-content">
            <InformationButton
              {...modalButtonContent.bind}
              onClick={() => navigate("/aircraft-bind")}
            />
            <InformationButton
              {...modalButtonContent.create}
              onClick={() => navigate("/aircraft-create")}
            />
          </div>
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
