import { Button } from "@mui/material";
import logo from "../../../../assets/logo.png";
import * as S from "./SplashScreen.styles";
import { useNavigate } from "react-router-dom";

export const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="logo" width={203} />
        <S.TextArea>
          <h1>Olá</h1>
          <span>
            Bem vindo ao Voe Comigo, o seu auxiliar de navegação completo
          </span>
        </S.TextArea>
        <div className="button-area">
          <Button
            className="primary"
            variant="contained"
            disableElevation
            onClick={() => navigate("/signin")}
          >
            Acessar
          </Button>
          <Button
            className="secondary"
            variant="outlined"
            disableElevation
            onClick={() => navigate("/signup")}
          >
            Registrar
          </Button>
        </div>
      </S.Content>
    </S.Container>
  );
};
