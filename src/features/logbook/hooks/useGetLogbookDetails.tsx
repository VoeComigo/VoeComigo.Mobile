import { useFetch } from "../../../hooks/useFetch/useFetch";
import { ILogbookDetailsResponse } from "./types";

export const useGetLogbookDetails = () => {
  const {
    lazyFetchData: getLogbookDetails,
    data,
    loading,
    error,
  } = useFetch<ILogbookDetailsResponse, undefined>({
    url: `/api/Aircraft/:aircraftID/LogBook/:logbookID`,
    method: "GET",
  });

  return { getLogbookDetails, data, loading, error };
};
