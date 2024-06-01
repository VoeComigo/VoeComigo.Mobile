import { IAircraftCrew } from "../../../components/AircraftCard/types";
import { useFetch } from "../../../hooks/useFetch/useFetch";

export const useGetAircraftInvitation = () => {
  const {
    fetchData: getAircraftInvitation,
    data,
    loading,
    error,
  } = useFetch<IAircraftCrew[], undefined>({
    url: "/api/Person/Aircraft/Invite",
    method: "GET",
  });

  return { getAircraftInvitation, data, loading, error };
};
