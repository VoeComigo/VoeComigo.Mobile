import { IAircraftCrew } from "../../../components/AircraftCard/types";
import { useFetch } from "../../../hooks/useFetch/useFetch";

export const useGetAircraft = () => {
  const {
    fetchData: getAircraft,
    data,
    loading,
    error,
  } = useFetch<IAircraftCrew[], undefined>({
    url: "/api/Person/Aircraft",
    method: "GET",
  });

  return { getAircraft, data, loading, error };
};
