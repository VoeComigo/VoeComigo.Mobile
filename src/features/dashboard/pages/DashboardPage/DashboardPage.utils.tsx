import { Avatar } from "@mui/material";
import * as S from "./DashboardPage.styles";
import { stringAvatar } from "../../../../utils/stringAvatar";
import { IAircraft } from "../../../../components/AircraftCard/types";

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

//  Aircraft terms interaction:
export type IAircrafTermsChange = {
  id: string;
  openModal: boolean;
  accepted: boolean;
};

//  Save the aircraft that has no acceptTerms into a list of terms and store its values
export function termsListController(
  termsList: IAircrafTermsChange[],
  term: IAircrafTermsChange
) {
  if (termsList.some((item) => item.id === term.id)) {
    termsList.some((item) => {
      if (item.id === term.id) {
        item.accepted = term.accepted;
        item.openModal = term.openModal;
        return true;
      }
      return false;
    });
  } else termsList.push(term);
  return termsList;
}
