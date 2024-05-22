import * as S from "./LogbookCrewCard.styles";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../../utils/stringAvatar";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ReportIcon from "@mui/icons-material/Report";

export const LogbookCrewCard = ({
  className,
  member,
  information,
  status,
}: Props) => {
  return (
    <S.EnchancedCard className={className}>
      <Avatar
        className="avatar"
        {...stringAvatar(member.name)}
        src={member.photo || ""}
        alt={member.name}
      />
      <div className="info">
        <h1 className="member-title">{member.name}</h1>
        {member.code && <p className="member-code">{member.code}</p>}
        {information && (
          <>
            <p className="member-info">{information?.main}</p>
            <p className="member-info">{information?.aditional}</p>
          </>
        )}
        {status && (
          <p className={`status-info${status.valid ? " valid" : " invalid"}`}>
            {status.valid ? <CheckBoxIcon /> : <ReportIcon />}
            {status.label}
          </p>
        )}
      </div>
    </S.EnchancedCard>
  );
};

type Props = {
  className?: string;
  member: {
    code?: string;
    name: string;
    photo: string;
  };
  information?: {
    main: string;
    aditional: string;
  };
  status?: {
    valid: boolean;
    label: string;
  };
};
