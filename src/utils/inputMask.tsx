type MaskType =
  | "cpf"
  | "cnpj"
  | "cpfCnpj"
  | "phone"
  | "cellphone"
  | "phoneCellphone"
  | "registration"
  | "anacCode"
  | "date"
  | "hour"
  | "big-text";

export const inputMask = (type: MaskType): string | MaskArray[] => {
  if (type === "registration") return "aa-aaa";
  if (type === "cpf") return "000.000.000-00";
  if (type === "cpfCnpj")
    return [{ mask: "000.000.000-00" }, { mask: "00.000.000/0000-00" }];
  if (type === "cnpj") return "00.000.000/0000-00";
  if (type === "phone") return "+00 (00) 0000-0000";
  if (type === "cellphone") return "+00 (00) 00000-0000";
  if (type === "phoneCellphone")
    return [{ mask: "+00 (00) 0000-0000" }, { mask: "+00 (00) 00000-0000" }];
  if (type === "anacCode") return "000000";
  if (type === "date") return "00/00/0000";
  if (type === "hour") return "00:00";
  if (type === "big-text") return "****************************************";
  return "";
};

type MaskArray = {
  mask: string;
};
