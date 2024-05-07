import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const RouteProtection = ({ isProtected = false, children }: Props) => {
  const validAuth: boolean = Boolean(sessionStorage.getItem("logged-user"));

  return validAuth || !isProtected ? children : <Navigate to={"/signin"} />;
};

type Props = {
  isProtected: boolean;
  children: React.ReactNode;
};

export interface IRoute {
  path: string;
  element: JSX.Element;
}

export const RedirectPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/signin");
  }, []);
  return <div>Você será redirecionado...</div>;
};
