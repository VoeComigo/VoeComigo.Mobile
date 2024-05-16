import { ITermsForm } from "../../../components/TermsOfUseModal/TermsOfUseModal.validation";
import { useFetch } from "../../../hooks/useFetch/useFetch";

export const useAcceptOpeningTerm = () => {
  const {
    lazyFetchData: acceptOpeningTerm,
    data,
    loading,
    error,
  } = useFetch<undefined, ITermsForm>({
    url: `/api/Aircraft/:aircraftID/LogBook/Opening-Term`,
    method: "POST",
  });

  return { acceptOpeningTerm, data, loading, error };
};
