import { useFetch } from "../../../hooks/useFetch/useFetch";
import {
  IUpdateAnacCode,
  IUpdateCpfCnpj,
  IUpdateDateOfBirth,
  IUpdateEmail,
  IUpdateName,
  IUpdatePhoneNumber,
  IUpdatePhoto,
} from "./types";

export const useUpdateProfile = () => {
  //  Update name:
  const { lazyFetchData: updateName, loading: loadingName } = useFetch<
    undefined,
    IUpdateName
  >({
    url: `/api/Person/Name`,
    method: "PATCH",
  });

  //  Update photo:
  const { lazyFetchData: updatePhoto, loading: loadingPhoto } = useFetch<
    undefined,
    IUpdatePhoto
  >({
    url: `/api/Person/Photo`,
    method: "PATCH",
  });

  //  Update date of birth:
  const { lazyFetchData: updateDateOfBirth, loading: loadingDateOfBirth } =
    useFetch<undefined, IUpdateDateOfBirth>({
      url: `/api/Person/DateOfBirth`,
      method: "PATCH",
    });

  //  Update CPF/CNPJ:
  const { lazyFetchData: updateCpfCnpj, loading: loadingCpfCnpj } = useFetch<
    undefined,
    IUpdateCpfCnpj
  >({
    url: `/api/Person/CpfCnpj`,
    method: "PATCH",
  });

  //  Update ANAC code:
  const { lazyFetchData: updateAnacCode, loading: loadingAnacCode } = useFetch<
    undefined,
    IUpdateAnacCode
  >({
    url: `/api/Person/AnacCode`,
    method: "PATCH",
  });

  //  Update email:
  const { lazyFetchData: updateEmail, loading: loadingEmail } = useFetch<
    undefined,
    IUpdateEmail
  >({
    url: `/api/Person/Email`,
    method: "PATCH",
  });

  //  Update phone number:
  const { lazyFetchData: updatePhoneNumber, loading: loadingPhoneNumber } =
    useFetch<undefined, IUpdatePhoneNumber>({
      url: `/api/Person/PhoneNumber`,
      method: "PATCH",
    });

  const loading: boolean =
    loadingName &&
    loadingPhoto &&
    loadingDateOfBirth &&
    loadingCpfCnpj &&
    loadingAnacCode &&
    loadingEmail &&
    loadingPhoneNumber;

  return {
    updateName,
    updatePhoto,
    updateDateOfBirth,
    updateCpfCnpj,
    updateAnacCode,
    updateEmail,
    updatePhoneNumber,
    loading,
  };
};
