import * as S from "../../AircraftDashboardCard.styles";
import { Checkbox } from "@mui/material";

export const TermsOfUse = ({ onCheck, onOpenTerm }: Props) => {
  return (
    <S.CheckboxContent>
      <Checkbox size="medium" onChange={(e) => onCheck(e.target.checked)} />
      <p>
        Declaro que li e estou de acordo com os{" "}
        <span className="terms-button" onClick={onOpenTerm}>
          termos de utilização do diário de bordo digital
        </span>{" "}
        para esta aeronave.
      </p>
    </S.CheckboxContent>
  );
};

type Props = {
  onCheck: (e: boolean) => void;
  onOpenTerm: () => void;
};
