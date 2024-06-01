import { useFetch } from "../../../hooks/useFetch/useFetch";

export const useAcceptInvitation = () => {
  const {
    lazyFetchData: acceptInvitation,
    data,
    loading,
    error,
  } = useFetch<undefined, undefined>({
    url: `/api/Person/Aircraft/:aircraftID/Invite/:inviteID/Accept`,
    method: "PATCH",
  });

  return { acceptInvitation, data, loading, error };
};

export const useDeclineInvitation = () => {
  const {
    lazyFetchData: declineInvitation,
    data,
    loading,
    error,
  } = useFetch<undefined, undefined>({
    url: `/api/Person/Aircraft/:aircraftID/Invite/:inviteID/Decline`,
    method: "PATCH",
  });

  return { declineInvitation, data, loading, error };
};
