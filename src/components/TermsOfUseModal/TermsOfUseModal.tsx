import { Checkbox } from "@mui/material";
import { TermOfUse } from "./TermOfUse";
import * as S from "./TermsOfUseModal.styles";

export const TermsStepOne = ({ aircraftID }: Props) => {
  return (
    <>
      <div className="title-area">
        <p className="fs16 purple">Condições de uso</p>
        <p className="fs28 purple bold">Diário de bordo digital</p>
      </div>
      <div className="term-of-use-container">
        <TermOfUse className="term-text" />
      </div>
      <div className="bottom-area">
        <Checkbox size="medium" onChange={(e) => console.log(e)} />
        <p className="fs14 purple">Li e concordo com os termos de uso</p>
      </div>
    </>
  );
};

export const TermsOfUseModal = ({ aircraftID }: Props) => {
  return (
    <S.Wrapper>
      <TermsStepOne aircraftID={aircraftID} />
    </S.Wrapper>
  );
};

type Props = {
  aircraftID: string;
};
