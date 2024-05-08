import * as yup from "yup";

export interface ILoginForm {
  userName: string;
  password: string;
}

export const DEFAULT_VALUES: ILoginForm = {
  userName: "",
  password: "",
};

export const LOGIN_SCHEMA = yup.object({
  userName: yup.string().required("Campo não pode estar vazio"),
  password: yup.string().required("Campo não pode estar vazio"),
});
