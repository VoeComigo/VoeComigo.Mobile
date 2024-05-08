import * as yup from 'yup';

export interface IPasswordRecoverForm{
  email: string
}

export const DEFAULT_VALUES: IPasswordRecoverForm = {
    email: ''
}

export const PASSWORD_RECOVER_SCHEMA = yup.object({
    email: yup.string().email().required('Não é um e-mail válido')
});