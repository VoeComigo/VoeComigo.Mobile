import { useFetch } from "../../../hooks/useFetch/useFetch";
import { ILogbookSimpleResponse } from "./types";

export const useGetLogbook = (aircraftID: string) => {
  const {
    fetchData: getLogbook,
    data,
    loading,
    error,
  } = useFetch<ILogbookSimpleResponse[], undefined>({
    url: `/api/Aircraft/${aircraftID}/LogBook`,
    method: "GET",
  });

  return { getLogbook, data, loading, error };
};
