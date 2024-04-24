import { useFetch } from "../../../hooks/useFetch/useFetch";

export interface IPersonData {
  id: string;
  name: string;
  cpfCnpj: string;
  dateOfBirth: string;
  anacCode: string;
  email?: string;
  phoneNumber?: string;
  photo: null | string;
}

export interface IAircraftPerson {
  id: string;
  role: string;
  person: IPersonData;
}

export interface ICrew {
  isOwner: boolean;
  registration: string;
  crew: IAircraftPerson[];
}

export const useGetCrew = (aircraftID: string) => {
  const {
    fetchData: getCrew,
    data,
    loading,
    error,
  } = useFetch<ICrew, undefined>({
    url: `/api/Aircraft/${aircraftID}/Crew`,
    method: "GET",
  });

  return { getCrew, data, loading, error };
};
