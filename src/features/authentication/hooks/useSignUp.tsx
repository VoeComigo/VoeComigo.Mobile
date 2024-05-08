import { useFetch } from "../../../hooks/useFetch/useFetch";
import { IUserSignIn } from "./useSignIn";

export const useSignUp = () => {
  const {
    lazyFetchData: signUp,
    data,
    loading,
    error,
  } = useFetch<undefined, IUserSignIn>({
    url: `/api/Person`,
    method: "POST",
  });

  return { signUp, data, loading, error };
};
