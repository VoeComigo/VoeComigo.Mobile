import { useState } from "react";

const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export type KeyObject = {
  [key: string]: string;
};

interface IDataInput<U> {
  url: string;
  method: "POST" | "GET" | "PUT" | "UPDATE" | "DELETE" | "PATCH";
  variables?: KeyObject[];
  input?: U;
}

interface IDataResponse<T, U> {
  fetchData: () => Promise<void>;
  lazyFetchData: (e?: KeyObject[], body?: U) => Promise<void>;
  data: T | null;
  loading: boolean;
  error: boolean;
}

export const useFetch = <T, U>({
  url,
  method,
  input,
  variables,
}: IDataInput<U>): IDataResponse<T, U> => {
  //  Control states:
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  //    If any variable was found, parse the url and change the vars:
  if (variables) {
    let auxUrl = url;
    variables.forEach((key) => {
      if (auxUrl.includes(`:${Object.keys(key)[0]}`)) {
        auxUrl = auxUrl.replace(
          `:${Object.keys(key)[0]}`,
          Object.values(key)[0]
        );
      }
    });
    url = auxUrl;
  }

  function getParsedUrl(newVars?: KeyObject[]): string {
    if (newVars) {
      let auxUrl = url;
      newVars.forEach((key) => {
        if (auxUrl.includes(`:${Object.keys(key)[0]}`)) {
          auxUrl = auxUrl.replace(
            `:${Object.keys(key)[0]}`,
            Object.values(key)[0]
          );
        }
      });
      return auxUrl;
    }
    return url;
  }

  //    Validate http status returned by the fetch request and tells if the request is valid or not:
  function validateHttpStatus(status: number): boolean {
    if (status >= 100 && status < 400) return true;
    return false;
  }

  //    Fetching function:
  async function fetchData(parsedUrl?: string): Promise<void> {
    setData(null);
    setError(false);
    setLoading(true);

    return await fetch(`${API_BASE_URL}${parsedUrl ? parsedUrl : url}`, {
      method: method,
      body: input ? JSON.stringify(input) : undefined,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((el) => {
        if (validateHttpStatus(el.status)) {
          el.json()
            .then((item) => {
              setData(item);
              setLoading(false);
              setError(false);
            })
            .catch(() => {
              setData(null);
              setLoading(false);
              setError(false);
              throw new Error(el.statusText);
            });
        } else throw new Error(el.statusText);
      })
      .catch((el) => {
        setData(null);
        setLoading(false);
        setError(true);
        throw new Error(el.statusText);
      });
  }

  //  Lazy fetch data for values that needs to be inputed on the runtime:
  function lazyFetchData(values?: KeyObject[], body?: U): Promise<void> {
    input = body;
    return fetchData(values ? getParsedUrl(values) : url);
  }

  return { fetchData, lazyFetchData, data, loading, error };
};

//  Usage example, without variables:
/* type Options = {
  id: string;
  description: string;
};

export function useGetTeste() {
  const {
    fetchData: getTeste,
    data,
    loading,
    error,
  } = useFetch<Options[], undefined>({
    url: `/api/Manufacturer/Airframe/:id/:name`,
    method: "GET",
  });

  return { getTeste, data, loading, error };
}

//  Usage example, with variables:
export function useGetTesteVariables() {
  const {
    fetchData: getTesteVariables,
    data,
    loading,
    error,
  } = useFetch<Options[], undefined>({
    url: `/api/Manufacturer/:manufactorID/Model`,
    method: "GET",
    variables: [{ manufactorID: "b9ce0a85-66c5-47fd-bc5d-2c813018ad6d" }],
  });

  return { getTesteVariables, data, loading, error };
}
 */
