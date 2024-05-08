type MaskType = "cpf" | "cnpj" | "registration" | "date" | "phone";

export const mask = (
  type: MaskType,
  value: string | number | null | undefined
): string => {
  if (!value) return "";
  const aux: string = value.toString();

  if (type === "cpf")
    return aux.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  if (type === "cnpj")
    return aux.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
      "$1.$2.$3/$4-$5"
    );
  if (type === "registration") return aux.replace(/^(\w{2})(\w{3})/g, "$1-$2");
  if (type === "date") {
    const [yyyy, mm, dd] = value.toString().split("-");
    return `${dd}/${mm}/${yyyy}`;
  }
  if (type === "phone") {
    return aux.replace(/^(\d{2})(\d{2})(\d{4,5})(\d{4})/g, "+$1 ($2) $3-$4");
  }
  return aux;
};
