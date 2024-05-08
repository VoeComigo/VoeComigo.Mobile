import { useFetch } from "../../../hooks/useFetch/useFetch";

export interface IProfile {
  id: string;
  name: string | null;
  cpfCnpj: string | null;
  dateOfBirth: string | null;
  email: string;
  phoneNumber: string | null;
  anacCode: string | null;
  photo: string | null;
  acceptWhatsappNotification: boolean | null;
  acceptEmailNotification: boolean | null;
  completeRegistration: boolean;
}

export const useGetProfile = () => {
  const {
    lazyFetchData: getProfile,
    data,
    loading,
    error,
  } = useFetch<IProfile, undefined>({
    url: `/api/Person`,
    method: "GET",
  });

  return { getProfile, data, loading, error };
};
