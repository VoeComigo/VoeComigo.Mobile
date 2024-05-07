import { Button, Link, TextField } from "@mui/material";
import logo from "../../../../assets/logo.png";
import * as S from "./LoginPage.styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  DEFAULT_VALUES,
  ILoginForm,
  LOGIN_SCHEMA,
} from "./LoginPage.validator";
import { useNotificationContext } from "../../../../contexts";
import { useSignIn } from "../../hooks/useSignIn";
import { usePageEventsHandling } from "../../../../contexts/PageEventsContext/PageEventsContext";
import { useEffect } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();

  //  UseForm:
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: "all",
    resolver: yupResolver(LOGIN_SCHEMA),
    defaultValues: DEFAULT_VALUES,
  });

  //  Controls the helperText in the bottom of the inputs:
  const showHelperText: boolean = true;

  //  Sign-in api request:
  const { signIn, loading, data, error } = useSignIn();

  //  Contexts:
  const { createNotification } = useNotificationContext();
  const { onChangeEvent } = usePageEventsHandling();

  useEffect(() => {
    if (!loading && data) {
      onChangeEvent("done");
      sessionStorage.setItem("logged-user", JSON.stringify(data));
      return navigate("/aircraft");
    }
    if (!loading && error) {
      createNotification({
        type: "error",
        title: "Dados incorretos",
        text: "Revise às informações e tente novamente",
      });
      return onChangeEvent("done");
    }
  }, [loading]);

  function onSubmit(e: ILoginForm) {
    onChangeEvent("loading");
    signIn(undefined, e);
  }

  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="logo" width={203} />
        <S.TextArea>
          <h1>Login</h1>
        </S.TextArea>
        <form onSubmit={handleSubmit(onSubmit)} id="login-form">
          <div className="input-area">
            <TextField
              {...register("userName")}
              variant="outlined"
              label="E-mail"
              size="small"
              error={!!errors.userName}
              helperText={showHelperText ? errors.userName?.message : undefined}
            />
            <div className="password-div">
              <TextField
                {...register("password")}
                variant="outlined"
                label="Senha"
                type="password"
                size="small"
                error={!!errors.password}
                helperText={
                  showHelperText ? errors.password?.message : undefined
                }
              />
              <Link
                className="link-button"
                onClick={() => navigate("/password-recover")}
              >
                Esqueceu a senha?
              </Link>
            </div>
          </div>
          <div className="button-area">
            <Button
              className="primary"
              type="submit"
              variant="contained"
              disableElevation
            >
              Acessar
            </Button>
            <Button
              type="button"
              className="secondary"
              variant="outlined"
              disableElevation
              onClick={() => navigate("/")}
            >
              Voltar
            </Button>
          </div>
        </form>
      </S.Content>
    </S.Container>
  );
};
