import { useFetch } from "../../../hooks/useFetch/useFetch";

export const useDeleteCrewMember = () => {
  const {
    lazyFetchData: deleteCrewMember,
    data,
    loading,
    error,
  } = useFetch<undefined, undefined>({
    url: `/api/Aircraft/:aircraftID/Crew/:memberID`,
    method: "DELETE",
  });

  return { deleteCrewMember, data, loading, error };
};
