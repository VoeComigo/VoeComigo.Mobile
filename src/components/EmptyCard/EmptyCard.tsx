import * as S from "./EmptyCard.styles";
import noAircraft from "../../assets/no-aircraft.png";

export const EmptyCard = ({ title }: Props) => {
  return (
    <S.EnchancedCard className="no-data">
      <S.NoContentContainer>
        <div className="avatar-area">
          <img src={noAircraft} alt="Not found" className="icon-area" />
          <p className="no-content-text">{title}</p>
        </div>
      </S.NoContentContainer>
    </S.EnchancedCard>
  );
};

type Props = {
  title: string;
};
