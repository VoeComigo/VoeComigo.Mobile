import { Button, TextField } from "@mui/material";
import logo from "../../../../assets/logo.png";
import * as S from "./PasswordRecoverPage.styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  DEFAULT_VALUES,
  IPasswordRecoverForm,
  PASSWORD_RECOVER_SCHEMA,
} from "./PasswordRecoverPage.validator";

export const PasswordRecoverPage = () => {
  const navigate = useNavigate();

  //  UseForm:
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPasswordRecoverForm>({
    mode: "all",
    resolver: yupResolver(PASSWORD_RECOVER_SCHEMA),
    defaultValues: DEFAULT_VALUES,
  });

  function onSubmit(data: IPasswordRecoverForm) {
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
          <h1>Recuperar senha</h1>
        </S.TextArea>
        <form onSubmit={handleSubmit(onSubmit)} id="password-recovery-form">
          <div className="input-area">
            <TextField
              {...register("email")}
              variant="outlined"
              label="Email"
              size="small"
              error={!!errors.email}
              helperText={showHelperText ? errors.email?.message : undefined}
            />
            <p className="recovery-text">
              *Um link com as instruções de recuperação será enviado para o
              email cadastrado
            </p>
          </div>
          <div className="button-area">
            <Button
              className="primary"
              variant="contained"
              disableElevation
              type="submit"
            >
              Recuperar senha
            </Button>
            <Button
              className="secondary"
              variant="outlined"
              type="button"
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
