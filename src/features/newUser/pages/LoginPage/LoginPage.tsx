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

  const { createNotification } = useNotificationContext();

  function getRandomNotifyType(): "info" | "success" | "error" | "warn" {
    const array: string[] = ["info", "success", "error", "warn"];
    return array.sort(() => Math.random() - 0.5)[0] as
      | "info"
      | "success"
      | "error"
      | "warn";
  }

  function onSubmit(data: ILoginForm) {
    console.log(data);
    //  API Request
    sessionStorage.setItem("logged-user", "{logged: true;}");

    createNotification({
      type: getRandomNotifyType(),
      title: "Mama me olhando",
      text: "Toda gatinha que é novinha quer mamar a cabecinha, se segura meu tigrão, que lá vai meu cabeção",
    });
    //  Post login route:
    navigate("/aircraft");
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
              {...register("username")}
              variant="outlined"
              label="Nome de usuário"
              size="small"
              error={!!errors.username}
              helperText={showHelperText ? errors.username?.message : undefined}
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
