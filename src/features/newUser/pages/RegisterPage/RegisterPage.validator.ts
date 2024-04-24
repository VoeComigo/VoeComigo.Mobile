import * as yup from "yup";

export interface IRegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
}

export const DEFAULT_VALUES: IRegisterForm = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const REGISTER_SCHEMA = yup.object({
  email: yup.string().email().required("Não é um e-mail válido"),
  password: yup.string().required("Campo não pode estar vazio"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "As senhas digitadas não conferem")
    .required("Campo não pode estar vazio"),
});
