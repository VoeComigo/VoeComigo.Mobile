import * as S from "./InvitationModal.styles";
import { useNotificationContext } from "../../contexts";
import { useMemo, useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BadgeIcon from "@mui/icons-material/Badge";
import { MaskedTextField } from "../MaskedTextField/MaskedTextField";
import { inputMask } from "../../utils/inputMask";
import { Button, MenuItem, Select } from "@mui/material";
import { ROLES } from "./InvitationModal.utils";
import { useInviteMember } from "../../features/aircraft/hooks/useInviteMember";
import { useParams } from "react-router-dom";

//const emailTest = new RegExp("/^[a-zA-z0-9-._+]+@w{2,}+(.w{2,})+/", "g");
export const InvitationModal = () => {
  //  Getting aircraft ID:
  const { id } = useParams<string>();

  //  Notifications
  const { createNotification } = useNotificationContext();

  //  API fetching:
  const { inviteMember, loading } = useInviteMember();

  const [searchType, setSearchType] = useState<"EMAIL" | "CPF" | "COD. ANAC">(
    "EMAIL"
  );

  //  Stores the value of the main input:
  const [input, setInput] = useState<string>("");
  const [role, setRole] = useState<string>("");

  //  Return the correct mask for the input based on the search type
  function getInputMask() {
    if (searchType === "CPF") return inputMask("cpf");
    if (searchType === "COD. ANAC") return inputMask("anacCode");
    return "********************************";
  }

  //  Searchtype change handling:
  function onChangeSearchType(type: "EMAIL" | "CPF" | "COD. ANAC") {
    setInput("");
    setSearchType(type);
  }

  function getInputLabel(type: "EMAIL" | "CPF" | "COD. ANAC") {
    if (type === "EMAIL") return "E-mail";
    if (type === "CPF") return "CPF";
    if (type === "COD. ANAC") return "Código ANAC";
    return "";
  }

  const disableSubmit = useMemo(() => {
    //  Empty fields validation:
    if (!input || !role) return true;
    if (searchType === "EMAIL")
      return !/^[a-zA-z0-9\-._+]+@\w{2,}(\.\w{2,})+/g.test(input);
    if (searchType === "CPF") return input.length < 11 ? true : false;
    if (searchType === "COD. ANAC") return input.length < 6 ? true : false;
    return false;
  }, [input, role, searchType]);

  async function handleSubmit() {
    try {
      await inviteMember([{ aircraftID: id || "" }], {
        searchTerm: input,
        role: role,
      });
      setInput("");
      setRole("");
      createNotification({
        type: "success",
        title: "Convite enviado",
        text: `Convite enviado com sucesso para o usuário ${input}.`,
      });
    } catch {
      createNotification({
        type: "error",
        title: "Erro ao convidar",
        text: `Ocorreu um erro ao convidar o usuário ${input}. Revise os campos e tente novamente mais tarde.`,
      });
    }
  }

  return (
    <S.Wrapper>
      <h1>Como você quer localizar o tripulante?</h1>
      <div className="button-area">
        <button
          className={`button-invite-type${
            searchType === "EMAIL" ? " selected" : ""
          }`}
          onClick={() => onChangeSearchType("EMAIL")}
        >
          <MailOutlineIcon />
          E-MAIL
        </button>
        <button
          className={`button-invite-type${
            searchType === "CPF" ? " selected" : ""
          }`}
          onClick={() => onChangeSearchType("CPF")}
        >
          <PersonOutlineIcon />
          CPF
        </button>
        <button
          className={`button-invite-type${
            searchType === "COD. ANAC" ? " selected" : ""
          }`}
          onClick={() => onChangeSearchType("COD. ANAC")}
        >
          <BadgeIcon />
          COD. ANAC
        </button>
      </div>

      <div className="input-area">
        <MaskedTextField
          className="text-input"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          type="text"
          label={getInputLabel(searchType)}
          size="small"
          value={input}
          mask={getInputMask()}
          placeholderchar={searchType === "EMAIL" ? " " : "_"}
          onChange={(e) => setInput(e.target.value)}
        />

        <Select
          className="select-input hide"
          label="Função"
          variant="outlined"
          size="small"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          {ROLES.map((item) => (
            <MenuItem key={item.key} value={item.key}>
              {item.value}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div className="button-area">
        <Button
          className="primary"
          disabled={disableSubmit || loading}
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          disableElevation
        >
          Enviar convite
        </Button>
      </div>
    </S.Wrapper>
  );
};
