import { useNavigate } from "react-router-dom";

export const useSignOut = () => {
  const navigate = useNavigate();
  function handleSignOut() {
    localStorage.removeItem("logged-user");
    return navigate("/");
  }
  return { handleSignOut };
};
