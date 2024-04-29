import { useFetch } from "../../../hooks/useFetch/useFetch";

export interface IAircraftCreation {
  registration: string;
  ownerName: string;
  ownerCpfCnpj: string;
  operatorName: string;
  operatorCpfCnpj: string;
  manufacturingYear: number;
  serieNumber: string;
  modelId: string;
  passengerAmount: number;
  seatsAmount: number;
  maxCrewMembers: number;
  flightType: string;
  registrationCategory: string;
}

export const useCreateAircraft = () => {
  const {
    lazyFetchData: createAircraft,
    data,
    loading,
    error,
  } = useFetch<undefined, IAircraftCreation>({
    url: `/api/Aircraft`,
    method: "POST",
  });

  return { createAircraft, data, loading, error };
};
