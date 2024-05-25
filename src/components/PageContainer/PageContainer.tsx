import * as S from "./PageContainer.styles";
import { MainButtonProps, MainMenu, RouteMapper } from "../MainMenu/MainMenu";
import { ReactNode } from "react";

export const PageContainer = ({
  header,
  children,
  hasMainMenu = true,
  actualRoute = "dashboard",
  mainButton,
}: Props) => {
  return (
    <>
      <S.Container className="app-container">
        {header.customHeader && !header.title ? (
          <div className="header-section">{header.customHeader}</div>
        ) : (
          <div className="header-section">
            <h1>{header.title}</h1>
            {header.subtitle && <h2>{header.subtitle}</h2>}
          </div>
        )}
        {children}
      </S.Container>

      {hasMainMenu && (
        <MainMenu
          actualRoute={actualRoute}
          mainButtonProps={{
            icon: mainButton?.icon,
            onClick: mainButton?.onClick,
          }}
        />
      )}
    </>
  );
};

type Props = {
  header: HeaderProps;
  children: ReactNode;
  hasMainMenu?: boolean;
  actualRoute?: RouteMapper;
  mainButton?: MainButtonProps;
};

type HeaderProps = {
  title?: string;
  subtitle?: string;
  customHeader?: React.ReactNode;
};
