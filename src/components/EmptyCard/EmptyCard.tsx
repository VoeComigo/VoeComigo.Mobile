import * as S from "./EmptyCard.styles";
import noAircraft from "../../assets/no-aircraft.png";
import { Button } from "@mui/material";

export const EmptyCard = ({
  className,
  title,
  customIcon,
  buttonLabel,
  onClick,
}: Props) => {
  return (
    <S.EnchancedCard className={`no-data ${className}`}>
      <>
        <S.NoContentContainer>
          <div className="avatar-area">
            <img
              src={customIcon ? customIcon : noAircraft}
              alt="Not found"
              className="icon-area"
            />
            <p className="no-content-text">{title}</p>
          </div>
        </S.NoContentContainer>

        {buttonLabel && (
          <Button
            className="primary"
            type="submit"
            variant="contained"
            onClick={onClick}
            disableElevation
          >
            {buttonLabel}
          </Button>
        )}
      </>
    </S.EnchancedCard>
  );
};

type Props = {
  className?: string;
  title: string;
  customIcon?: string;
  buttonLabel?: string;
  onClick?: () => void;
};
