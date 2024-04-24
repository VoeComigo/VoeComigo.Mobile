import * as S from "./MainMenu.styles";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
import WbCloudyOutlinedIcon from "@mui/icons-material/WbCloudyOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { useNavigate } from "react-router-dom";

export type RouteMapper = "dashboard" | "aircraft" | "weather" | "plan";

export const MainMenu = ({ actualRoute, mainButtonProps }: Props) => {
  const navigate = useNavigate();

  const handleNavigation = (route: RouteMapper) => {
    navigate(`/${route}`);
  };

  return (
    <S.Wrapper>
      <S.MainContainer>
        <div className="button-wrapper">
          <button
            type="button"
            className="normal-button"
            onClick={() => handleNavigation("dashboard")}
          >
            <CottageOutlinedIcon className="icons" />
            <span
              className={`navigator-dot ${
                actualRoute === "dashboard" && "show"
              }`}
            />
          </button>
          <button
            type="button"
            className="normal-button"
            onClick={() => handleNavigation("aircraft")}
          >
            <AirplanemodeActiveOutlinedIcon className="icons" />
            <span
              className={`navigator-dot ${
                actualRoute === "aircraft" && "show"
              }`}
            />
          </button>
        </div>

        <div className="button-wrapper">
          <button
            type="button"
            className="normal-button"
            onClick={() => handleNavigation("weather")}
          >
            <WbCloudyOutlinedIcon className="icons" />
            <span
              className={`navigator-dot ${actualRoute === "weather" && "show"}`}
            />
          </button>
          <button
            type="button"
            className="normal-button"
            onClick={() => handleNavigation("plan")}
          >
            <CalendarMonthOutlinedIcon className="icons" />
            <span
              className={`navigator-dot ${actualRoute === "plan" && "show"}`}
            />
          </button>
        </div>
      </S.MainContainer>

      <button
        type="button"
        className="floating-button"
        onClick={() =>
          mainButtonProps ? mainButtonProps.onClick() : undefined
        }
      >
        {mainButtonProps ? (
          mainButtonProps.icon
        ) : (
          <AutoStoriesOutlinedIcon className="icons" />
        )}
      </button>
    </S.Wrapper>
  );
};

type Props = {
  actualRoute: RouteMapper;
  mainButtonProps?: MainButtonProps;
};

export type MainButtonProps = {
  icon: JSX.Element;
  onClick: () => void;
};
