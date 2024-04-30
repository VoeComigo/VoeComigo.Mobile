import * as S from "./AircraftInviteCard.styles";
import Button from "@mui/material/Button";
import { Card } from "../Card/Card";
import { useNavigate } from "react-router-dom";
import { IAircraft } from "../AircraftCard/types";
import { ImageContainer, InformationContainer } from "../AircraftCard";
import {
  useAcceptInvitation,
  useDeclineInvitation,
} from "../../features/aircraft/hooks/useInvitationHandling";
import { useNotificationContext } from "../../contexts";
import { ACCEPT_MESSAGES, DECLINE_MESSAGES } from "./AircraftInviteCard.utils";

export const AircraftInviteCard = ({ className, aircraftData }: Props) => {
  const navigate = useNavigate();

  const { acceptInvitation, loading: acceptLoading } = useAcceptInvitation();
  const { declineInvitation, loading: declineLoading } = useDeclineInvitation();

  const { createNotification } = useNotificationContext();

  function handleInvitation(type: "ACCEPT" | "DECLINE") {
    if (type === "ACCEPT") {
      acceptInvitation([{ aircraftID: aircraftData.id }])
        .then(() => {
          createNotification(ACCEPT_MESSAGES.SUCCESS);
          return navigate(0); // refresh
        })
        .catch(() => {
          createNotification(ACCEPT_MESSAGES.ERROR);
          return;
        });
    }
    if (type === "DECLINE") {
      declineInvitation([{ aircraftID: aircraftData.id }])
        .then(() => {
          createNotification(DECLINE_MESSAGES.SUCCESS);
          return navigate(0); // refresh
        })
        .catch(() => {
          createNotification(DECLINE_MESSAGES.ERROR);
          return;
        });
    }
  }

  return (
    <Card className={className}>
      <S.Content>
        <ImageContainer {...aircraftData} isAircraftCard={false} />
        <InformationContainer {...aircraftData} />
        <div className="invite-buttons">
          <Button
            className="secondary"
            type="submit"
            variant="contained"
            disabled={acceptLoading || declineLoading}
            onClick={() => handleInvitation("DECLINE")}
            disableElevation
          >
            RECUSAR
          </Button>
          <Button
            className="primary"
            type="submit"
            variant="contained"
            disabled={acceptLoading || declineLoading}
            onClick={() => handleInvitation("ACCEPT")}
            disableElevation
          >
            ACEITAR
          </Button>
        </div>
      </S.Content>
    </Card>
  );
};

type Props = {
  className?: string;
  aircraftData: IAircraft;
};
