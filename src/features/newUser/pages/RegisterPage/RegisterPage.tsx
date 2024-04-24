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

  function onSubmit(data: IRegisterForm) {
    console.log(data);
    //  API Request
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
              {...register("email")}
              variant="outlined"
              label="Email"
              size="small"
              error={!!errors.email}
              helperText={showHelperText ? errors.email?.message : undefined}
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
