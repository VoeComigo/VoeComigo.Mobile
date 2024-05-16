import * as yup from "yup";

export interface ITermsForm {
  identifier: string | null;
  totalHours: number | null;
  totalCycles: number | null;
  landingQuantity: number | null;
}

export const DEFAULT_VALUES = {
  identifier: null,
  totalHours: null,
  totalCycles: null,
  landingQuantity: null,
};

export const VALIDATE_TERMS_SCHEMA = yup.object({
  identifier: yup
    .string()
    .required("Campo não pode estar vazio")
    .max(20, "Máximo de 20 caractéres"),
  totalHours: yup
    .number()
    .required("Campo não pode estar vazio")
    .typeError("Valor deve ser numérico"),
  totalCycles: yup
    .number()
    .required("Campo não pode estar vazio")
    .typeError("Valor deve ser numérico"),
  landingQuantity: yup
    .number()
    .required("Campo não pode estar vazio")
    .typeError("Valor deve ser numérico"),
});
