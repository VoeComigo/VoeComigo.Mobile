import * as S from "./StatusButton.styles";
import InfoIcon from "@mui/icons-material/Info";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const StatusButton = ({
  label,
  value,
  onClick,
  noDataLabel = "Sem informações no cadastro",
}: Props) => {
  return (
    <S.ButtonWrapper onClick={onClick}>
      <span className="main-label">
        <p>{label}</p>
      </span>
      <span className="status-label">
        {value ? (
          <p className="text-info">{value}</p>
        ) : (
          <p className="text-info">
            <InfoIcon />
            {noDataLabel}
          </p>
        )}
        <ArrowRightIcon />
      </span>
    </S.ButtonWrapper>
  );
};

type Props = {
  label: string;
  noDataLabel?: string;
  value?: string | null;
  onClick: () => void;
};
