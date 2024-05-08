import { useFetch } from "../../../hooks/useFetch/useFetch";

export const useSetFavoriteAircraft = () => {
  const {
    lazyFetchData: setFavoriteAircraft,
    data,
    loading,
    error,
  } = useFetch<undefined, undefined>({
    url: `/api/Person/Aircraft/:aircraftID/Favorite`,
    method: "PATCH",
  });

  return { setFavoriteAircraft, data, loading, error };
};
