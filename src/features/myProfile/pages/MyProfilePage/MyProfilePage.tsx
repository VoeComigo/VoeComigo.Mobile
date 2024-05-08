import * as S from "./MyProfilePage.styles";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Avatar } from "@mui/material";
import { usePageEventsHandling } from "../../../../contexts/PageEventsContext/PageEventsContext";
import { useEffect } from "react";
import { useGetProfile } from "../../hooks/useUpdateName";
import { stringAvatar } from "../../../../utils/stringAvatar";
import { StatusButton } from "../../../../components/StatusButton/StatusButton";
import { mask } from "../../../../utils/mask";
import { BottomModal } from "../../../../hooks/useModalController/BottomModal/BottomModal";
import { useModalController } from "../../../../hooks";

export const MyProfilePage = () => {
  //  Loading and error handling:
  const { onChangeEvent } = usePageEventsHandling();

  ///  Data fetching:
  const { getProfile, data, loading, error } = useGetProfile();

  //  Modal controller:
  const { toggleModal, controller } = useModalController();

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (loading) return onChangeEvent("loading");
    if (!loading && error) return onChangeEvent("error");
    if (!loading) return onChangeEvent("done");
  }, [loading]);

  return (
    <S.Container>
      <S.AvatarArea>
        <div className="action-buttons-area">
          <button
            className={`action-button${
              data?.completeRegistration ? "" : " hide"
            }`}
          >
            <ArrowBackIosIcon />
          </button>
          <button className="action-button">
            <LogoutIcon />
          </button>
        </div>
        <div className="avatar-area">
          <Avatar
            className="avatar"
            {...stringAvatar(data?.name || "Sem Cadastro")}
            src={data?.photo || ""}
            alt={data?.email}
          />
        </div>
      </S.AvatarArea>
      <S.OptionsArea>
        <StatusButton
          label="Nome completo"
          value={data?.name}
          onClick={() => toggleModal()}
        />
        <StatusButton
          label="Data de nascimento"
          value={mask("date", data?.dateOfBirth)}
          onClick={() => console.log("1")}
        />
        <StatusButton
          label="CPF ou CNPJ"
          value={
            data?.cpfCnpj && data?.cpfCnpj?.length > 11
              ? mask("cnpj", data.cpfCnpj)
              : mask("cpf", data?.cpfCnpj)
          }
          onClick={() => console.log("1")}
        />
        <StatusButton
          label="Código ANAC"
          value={data?.anacCode}
          onClick={() => console.log("1")}
        />
        <StatusButton
          label="E-Mail"
          value={data?.email}
          onClick={() => console.log("1")}
        />
        <StatusButton
          label="Telefone"
          value={mask("phone", data?.phoneNumber)}
          onClick={() => console.log("1")}
        />
      </S.OptionsArea>
      <BottomModal {...controller}>
        <span>asdas</span>
      </BottomModal>
    </S.Container>
  );
};
