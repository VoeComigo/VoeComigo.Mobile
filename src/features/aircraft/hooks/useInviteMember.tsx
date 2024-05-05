import { useFetch } from "../../../hooks/useFetch/useFetch";

type InviteInput = {
  searchTerm: string;
  role: string;
};

export const useInviteMember = () => {
  const {
    lazyFetchData: inviteMember,
    data,
    loading,
    error,
  } = useFetch<undefined, InviteInput>({
    url: `/api/Person/Aircraft/:aircraftID/Invite`,
    method: "POST",
  });

  return { inviteMember, data, loading, error };
};
