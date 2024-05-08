import { Button, TextField } from "@mui/material";
import logo from "../../../../assets/logo.png";
import * as S from "./RegisterPage.styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  DEFAULT_VALUES,
  IRegisterForm,
  REGISTER_SCHEMA,
} from "./RegisterPage.validator";
import { useSignUp } from "../../hooks/useSignUp";
import { useNotificationContext } from "../../../../contexts";

export const RegisterPage = () => {
  const navigate = useNavigate();

  //  UseForm:
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    mode: "all",
    resolver: yupResolver(REGISTER_SCHEMA),
    defaultValues: DEFAULT_VALUES,
  });

  //  API Fetching:
  const { signUp, loading } = useSignUp();

  //  Notification:
  const { createNotification } = useNotificationContext();

  async function onSubmit(data: IRegisterForm) {
    try {
      await signUp(undefined, {
        userName: data.userName,
        password: data.password,
      });
      createNotification({
        type: "success",
        title: "Cadastro realizado",
        text: "Cadastro realizado, efetue o login para acessar a plataforma",
      });
      navigate("/signin");
    } catch {
      createNotification({
        type: "error",
        title: "Erro ao cadastrar",
        text: "Ocorreu um erro ao cadastrar o usuário, revise os dados e tente novamente",
      });
    }
  }

  //  Controls the helperText in the bottom of the inputs:
  const showHelperText: boolean = true;

  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="logo" width={203} />
        <S.TextArea>
          <h1>Cadastrar</h1>
        </S.TextArea>
        <form onSubmit={handleSubmit(onSubmit)} id="form-sign-up">
          <div className="input-area">
            <TextField
              {...register("userName")}
              variant="outlined"
              label="Email"
              size="small"
              error={!!errors.userName}
              helperText={showHelperText ? errors.userName?.message : undefined}
            />
            <TextField
              {...register("password")}
              variant="outlined"
              label="Senha"
              type="password"
              size="small"
              error={!!errors.password}
              helperText={showHelperText ? errors.password?.message : undefined}
            />
            <TextField
              {...register("confirmPassword")}
              variant="outlined"
              label="Confirme a senha"
              type="password"
              size="small"
              error={!!errors.confirmPassword}
              helperText={
                showHelperText ? errors.confirmPassword?.message : undefined
              }
            />
          </div>
          <div className="button-area">
            <Button
              className="primary"
              type="submit"
              variant="contained"
              disabled={loading}
              disableElevation
            >
              Cadastrar
            </Button>
            <Button
              className="secondary"
              type="button"
              variant="outlined"
              disableElevation
              onClick={() => navigate("/signin")}
            >
              Voltar
            </Button>
          </div>
        </form>
      </S.Content>
    </S.Container>
  );
};
