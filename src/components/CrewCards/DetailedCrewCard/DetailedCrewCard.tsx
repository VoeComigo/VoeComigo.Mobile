import * as S from "./DetailedCrewCard.styles";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../../../utils/stringAvatar";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { WhatsappIcon } from "../../Icons";
import { IAircraftPerson } from "../../../features/aircraft/hooks/useGetCrew";
import { useDeleteCrewMember } from "../../../features/aircraft/hooks/useDeleteCrewMember";
import { useNavigate } from "react-router-dom";
import { useNotificationContext } from "../../../contexts";
import { NOTIFICATION_TYPES } from "./DetailedCrewCard.utils";
import { useState } from "react";
import { Modal, RemoveModal, useModalController } from "../../../hooks";

export const DetailedCrewCard = ({ aircraftID, crewMember, isOwner }: Prop) => {
  // Refresh handler:
  const navigate = useNavigate();

  //  Member being removed:
  const [removeMember, setRemoveMember] = useState<{
    id: string;
    name: string;
  } | null>(null);

  //  Removing crew member:
  const { deleteCrewMember, loading } = useDeleteCrewMember();

  // Notification Context:
  const { createNotification } = useNotificationContext();

  //  Go back modal controller:
  const { toggleModal, controller } = useModalController();

  //  Handle member deletion:
  function handleDelete(id: string) {
    toggleModal();
    deleteCrewMember([{ aircraftID: aircraftID }, { memberID: id }])
      .then(() => {
        setRemoveMember(null);
        createNotification(NOTIFICATION_TYPES.SUCCESS);
        navigate(0);
      })
      .catch(() => {
        createNotification(NOTIFICATION_TYPES.ERROR);
      });
  }

  if (!crewMember) {
    return (
      <S.EnchancedCard className="no-data">
        <S.NoContentContainer>
          <div className="avatar-area">
            <InfoOutlinedIcon className="icon-blue" />
            <p className="no-content-text">
              Adicione tripulantes para acessar às informações detalhadas
            </p>
          </div>
        </S.NoContentContainer>
      </S.EnchancedCard>
    );
  } else {
    return (
      <>
        <Modal {...controller} contentStyle="normal">
          <RemoveModal
            labels={{
              title: `Tem certeza que deseja remover o tripulante: ${removeMember?.name}?`,
              primaryLabel: "Sim, vou remove-lo",
              secondaryLabel: "Não, mudei de idéia",
            }}
            options={{ disablePrimary: loading }}
            onPrimaryClick={() => handleDelete(removeMember!.id)}
            onSecondaryClick={toggleModal}
          />
        </Modal>
        <S.EnchancedCard>
          <S.Container>
            <div className="avatar-area">
              <Avatar
                className="avatar"
                {...stringAvatar(crewMember.person.name)}
                src={crewMember.person.photo || ""}
                alt={crewMember.person.name}
              />
              <h1>{crewMember.person.name}</h1>
              <p>{crewMember.person.email}</p>
            </div>
            <div className="details-area">
              <div className="role-area">
                <p>Função</p>
                <p className="bold">{crewMember.role}</p>
              </div>
              <div className="anac-area">
                <p>Cod. ANAC</p>
                <p className="bold">{crewMember.person.anacCode}</p>
              </div>
            </div>
            <div className="button-area">
              {crewMember.person.email && (
                <button
                  className="option-button blue"
                  onClick={() =>
                    (window.location.href = `mailto:${crewMember.person.email}`)
                  }
                >
                  <EmailOutlinedIcon />
                </button>
              )}
              {crewMember.person.phoneNumber && (
                <button
                  className="option-button blue-pale"
                  onClick={() =>
                    window.open(`tel:${crewMember.person.phoneNumber}`, "_self")
                  }
                >
                  <PhoneInTalkOutlinedIcon />
                </button>
              )}
              {crewMember.person.phoneNumber && (
                <button
                  className="option-button green"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${crewMember.person.phoneNumber}`
                    )
                  }
                >
                  <WhatsappIcon className={"whatsapp-icon"} />
                </button>
              )}
              {isOwner && (
                <button
                  className="remove-button"
                  disabled={loading}
                  onClick={() => {
                    setRemoveMember({
                      id: crewMember.id,
                      name: crewMember.person.name,
                    });
                    toggleModal();
                  }}
                >
                  {loading ? (
                    <S.Spinner />
                  ) : (
                    <DeleteForeverOutlinedIcon className="trashcan-icon" />
                  )}
                </button>
              )}
            </div>
          </S.Container>
        </S.EnchancedCard>
      </>
    );
  }
};

type Prop = {
  aircraftID: string;
  isOwner?: boolean;
  crewMember?: IAircraftPerson;
};
