import * as yup from 'yup';

export interface ILoginForm{
  username: string,
  password: string
}

export const DEFAULT_VALUES: ILoginForm = {
  username: '',
  password: ''
}

export const LOGIN_SCHEMA = yup.object({
  username: yup.string().required('Campo não pode estar vazio'),
  password: yup.string().required('Campo não pode estar vazio')
});