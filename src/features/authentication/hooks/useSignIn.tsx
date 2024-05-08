import { useFetch } from "../../../hooks/useFetch/useFetch";

export interface IUserSignIn {
  userName: string;
  password: string;
}

export interface ITokenResponse {
  token: string;
}

export const useSignIn = () => {
  const {
    lazyFetchData: signIn,
    data,
    loading,
    error,
  } = useFetch<ITokenResponse, IUserSignIn>({
    url: `/api/Auth/login`,
    method: "POST",
  });

  return { signIn, data, loading, error };
};
