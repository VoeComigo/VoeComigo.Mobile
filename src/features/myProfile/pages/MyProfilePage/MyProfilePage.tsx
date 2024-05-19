import * as S from "./MyProfilePage.styles";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Avatar, Button, Checkbox } from "@mui/material";
import { usePageEventsHandling } from "../../../../contexts/PageEventsContext/PageEventsContext";
import { useEffect, useState } from "react";
import { stringAvatar } from "../../../../utils/stringAvatar";
import { StatusButton } from "../../../../components/StatusButton/StatusButton";
import { mask } from "../../../../utils/mask";
import { useGetProfile } from "../../../dashboard/hooks/useGetProfile";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";
import {
  TYPES_DICTIONARY,
  UPDATE_TYPES,
  getInputPropsByUpdateType,
  getModalTitleByType,
  getTextBoxLabelByUpdateType,
  setDefaultInputValues,
  transformDateFormat,
} from "./MyProfilePage.utils";
import { MaskedTextField } from "../../../../components/MaskedTextField/MaskedTextField";
import { useNotificationContext } from "../../../../contexts";
import { useNavigate } from "react-router-dom";
import { useSignOut } from "../../../../hooks/useSignOut/useSignOut";
import { useModalContext } from "../../../../contexts/ModalContext/ModalContext";

type ISaveInput = {
  text: string;
  optin: boolean;
};

export const MyProfilePage = () => {
  //  Navigation:
  const navigate = useNavigate();

  //  Update control state:
  const [updateType, setUpdateType] = useState<UPDATE_TYPES>("NAME");
  const [inputValue, setInputValue] = useState<ISaveInput>({
    text: "",
    optin: false,
  });

  //  Loading and error handling:
  const { onChangeEvent } = usePageEventsHandling();

  ///  Data fetching:
  const { getProfile, data, loading, error } = useGetProfile();
  const {
    updateName,
    //updatePhoto,
    updateDateOfBirth,
    updateCpfCnpj,
    updateAnacCode,
    updateEmail,
    updatePhoneNumber,
    loading: loadingUpdate,
  } = useUpdateProfile();

  //  Notification:
  const { createNotification } = useNotificationContext();

  //  Sign-out handler:
  const { handleSignOut } = useSignOut();

  // Modal context:
  const { toggleModal, setModalStyle, setModalContent } = useModalContext();
  useEffect(() => {
    setModalStyle("bottom");
  }, []);

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (loading) return onChangeEvent("loading");
    if (!loading && error) return onChangeEvent("error");
    if (!loading) return onChangeEvent("done");
  }, [loading]);

  function toggleUpdateModal(type: UPDATE_TYPES) {
    setUpdateType(type);
    setInputValue(setDefaultInputValues(data, type));
    toggleModal();
  }

  //  Update modal content:
  useEffect(() => {
    setModalContent(
      <S.ModalContent>
        <div className="modal-title-area">
          <p className="title">Atualização cadastral</p>
          <p className="subtitle">{getModalTitleByType(updateType)}</p>
        </div>
        <div className="input-area">
          <MaskedTextField
            className="input"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            type="text"
            size="small"
            value={inputValue.text}
            {...getInputPropsByUpdateType(updateType)}
            onChange={(e) =>
              setInputValue({ ...inputValue, text: e.target.value })
            }
          />
          {(updateType === "EMAIL" || updateType === "PHONE") && (
            <p className="checkbox-area">
              <Checkbox
                checked={inputValue.optin}
                size="medium"
                onChange={(e) =>
                  setInputValue({ ...inputValue, optin: e.target.checked })
                }
              />
              {getTextBoxLabelByUpdateType(updateType)}
            </p>
          )}
        </div>
        <div className="submit-area">
          <Button
            className="primary"
            type="submit"
            variant="contained"
            disabled={loadingUpdate}
            disableElevation
            onClick={handleUpdate}
          >
            Salvar alterações
          </Button>
        </div>
      </S.ModalContent>
    );
  }, [updateType]);

  async function handleUpdate() {
    try {
      if (updateType === "NAME")
        await updateName(undefined, { name: inputValue.text });
      if (updateType === "DATEOFBIRTH")
        await updateDateOfBirth(undefined, {
          dateOfBirth: transformDateFormat(inputValue.text),
        });
      if (updateType === "CPFCNPJ")
        await updateCpfCnpj(undefined, { cpfCnpj: inputValue.text });
      if (updateType === "ANACCODE")
        await updateAnacCode(undefined, { anacCode: inputValue.text });
      if (updateType === "EMAIL")
        await updateEmail(undefined, {
          email: inputValue.text,
          acceptEmailNotification: inputValue.optin,
        });
      if (updateType === "PHONE")
        await updatePhoneNumber(undefined, {
          phoneNumber: inputValue.text,
          acceptWhatsAppNotification: inputValue.optin,
        });

      createNotification({
        type: "success",
        title: "Atualizado com sucesso",
        text: `O campo ${getModalTitleByType(
          updateType
        ).toLowerCase()}, foi atualizado com sucesso!!`,
      });
      getProfile();
      toggleModal();
    } catch {
      createNotification({
        type: "error",
        title: "Erro ao atualizar",
        text: `Ocorreu um erro ao atualizar o campo ${getModalTitleByType(
          updateType
        ).toLowerCase()}, tente novamente mais tarde!!`,
      });
    }
  }

  return (
    <S.Container>
      <S.AvatarArea>
        <div className="action-buttons-area">
          <button
            className={`action-button${
              data?.completeRegistration ? "" : " hide"
            }`}
            onClick={() => navigate("/dashboard")}
          >
            <ArrowBackIosIcon />
          </button>
          <button className="action-button" onClick={() => handleSignOut()}>
            <LogoutIcon />
          </button>
        </div>
        <div className="avatar-area">
          <div className="change-avatar">
            <Avatar
              className="avatar"
              {...stringAvatar(data?.name || "Sem Cadastro")}
              src={data?.photo || ""}
              alt={data?.email}
            />
            <button className="change-button">
              <AddAPhotoIcon />
            </button>
          </div>
        </div>
      </S.AvatarArea>
      <S.OptionsArea>
        <StatusButton
          label={TYPES_DICTIONARY["NAME"]}
          value={data?.name}
          onClick={() => toggleUpdateModal("NAME")}
        />
        <StatusButton
          label={TYPES_DICTIONARY["DATEOFBIRTH"]}
          value={mask("date", data?.dateOfBirth)}
          onClick={() => toggleUpdateModal("DATEOFBIRTH")}
        />
        <StatusButton
          label={TYPES_DICTIONARY["CPFCNPJ"]}
          value={
            data?.cpfCnpj && data?.cpfCnpj?.length > 11
              ? mask("cnpj", data.cpfCnpj)
              : mask("cpf", data?.cpfCnpj)
          }
          onClick={() => toggleUpdateModal("CPFCNPJ")}
        />
        <StatusButton
          label={TYPES_DICTIONARY["ANACCODE"]}
          value={data?.anacCode}
          onClick={() => toggleUpdateModal("ANACCODE")}
        />
        <StatusButton
          label={TYPES_DICTIONARY["EMAIL"]}
          value={data?.email}
          onClick={() => toggleUpdateModal("EMAIL")}
        />
        <StatusButton
          label={TYPES_DICTIONARY["PHONE"]}
          value={mask("phone", data?.phoneNumber)}
          onClick={() => toggleUpdateModal("PHONE")}
        />
        <div className="bottom-spacer"></div>
      </S.OptionsArea>
    </S.Container>
  );
};
