import { Avatar } from "@mui/material";
import * as S from "./DashboardPage.styles";
import { stringAvatar } from "../../../../utils/stringAvatar";

type IDashboardHeaderProps = {
  greetings: string;
  username: string;
  userPhoto: string;
  onClick: () => void;
};
export const DashboardHeader = ({
  greetings,
  username,
  userPhoto,
  onClick,
}: IDashboardHeaderProps) => {
  const [name, surname] = username.split(" ");
  return (
    <S.DashboardHeader>
      <div className="text-area">
        <p className="fs14">{greetings}</p>
        <p className="fs22 bold">{`${name || ""} ${surname || ""}`}</p>
      </div>
      <button className="avatar-button" onClick={onClick}>
        <Avatar
          className="avatar"
          {...stringAvatar(username || "Sem Cadastro")}
          src={userPhoto}
          alt={username}
        />
      </button>
    </S.DashboardHeader>
  );
};
