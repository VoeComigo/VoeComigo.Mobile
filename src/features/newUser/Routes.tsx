import {
  LoginPage,
  PasswordRecoverPage,
  RegisterPage,
  SplashScreen,
} from "./pages";
import { IRoute } from "../../utils/RouteProtection";

export const newUserRoutes: IRoute[] = [
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
  },
  {
    path: "/password-recover",
    element: <PasswordRecoverPage />,
  },
];
