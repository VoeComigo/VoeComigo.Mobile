import { inputMask } from "../../../../utils/inputMask";
import { IProfile } from "../../../dashboard/hooks/useGetProfile";

export enum TYPES_DICTIONARY {
  NAME = "Nome completo",
  DATEOFBIRTH = "Data de nascimento",
  CPFCNPJ = "CPF ou CNPJ",
  ANACCODE = "Código ANAC",
  EMAIL = "E-mail",
  PHONE = "Telefone",
}

export enum MASK_DICTIONARY {
  NAME = "big-text",
  DATEOFBIRTH = "date",
  CPFCNPJ = "cpfCnpj",
  ANACCODE = "anacCode",
  EMAIL = "big-text",
  PHONE = "phoneCellphone",
}

export enum PLACEHOLDER_DICTIONARY {
  NAME = " ",
  DATEOFBIRTH = "_",
  CPFCNPJ = "_",
  ANACCODE = "_",
  EMAIL = " ",
  PHONE = "_",
}

export type UPDATE_TYPES =
  | "NAME"
  | "DATEOFBIRTH"
  | "CPFCNPJ"
  | "ANACCODE"
  | "EMAIL"
  | "PHONE";

export function getModalTitleByType(type: UPDATE_TYPES): string {
  return TYPES_DICTIONARY[type];
}

export function getInputPropsByUpdateType(type: UPDATE_TYPES) {
  return {
    placeholderchar: PLACEHOLDER_DICTIONARY[type] as string,
    mask: inputMask(MASK_DICTIONARY[type]),
  };
}

export function getTextBoxLabelByUpdateType(type: UPDATE_TYPES): string {
  if (type === "EMAIL") return "Aceito receber contatos via E-mail";
  return "Aceito receber contatos via Whatsapp";
}

function transformDate(date: string | null): string {
  if (!date) return "";
  const [yyyy, mm, dd] = date.split("-");
  return `${dd}${mm}${yyyy}`;
}

export function transformDateFormat(date: string | null): string {
  if (!date) return "";
  const { dd, mm, yyyy } = {
    dd: date.slice(0, 2),
    mm: date.slice(2, 4),
    yyyy: date.slice(4, date.length),
  };
  return `${yyyy}-${mm}-${dd}`;
}

export function setDefaultInputValues(
  data: IProfile | null,
  type: UPDATE_TYPES
): { text: string; optin: boolean } {
  if (!data) return { text: "", optin: false };
  if (type === "NAME") return { text: data.name || "", optin: false };
  if (type === "DATEOFBIRTH")
    return { text: transformDate(data.dateOfBirth) || "", optin: false };
  if (type === "CPFCNPJ") return { text: data.cpfCnpj || "", optin: false };
  if (type === "ANACCODE") return { text: data.anacCode || "", optin: false };
  if (type === "EMAIL")
    return {
      text: data.email || "",
      optin: data.acceptEmailNotification || false,
    };
  if (type === "PHONE")
    return {
      text: data.phoneNumber || "",
      optin: data.acceptWhatsAppNotification || false,
    };
  return { text: "", optin: false };
}
