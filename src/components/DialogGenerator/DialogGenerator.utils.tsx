import { useState } from "react";
import { IDialog, IDialogOption } from "./DialogGenerator";

interface ISelectType {
  title: string;
  value: string;
}

export function useDynamicDialogFetching() {
  const [data, setData] = useState<ISelectType[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  function generateSelectItems(el: any) {
    const aux: ISelectType[] = [];
    el.forEach((item: { description: any; id: any }) => {
      aux.push({
        title: item.description,
        value: item.id,
      });
    });
    return aux;
  }

  function fetchData(caller: (e?: string) => Promise<any>, param?: string) {
    setData(null);
    setLoading(true);
    setError(false);

    caller(param)
      .then((el) => {
        setData(generateSelectItems(el));
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setData(null);
        setLoading(false);
        setError(true);
      });
  }

  return { fetchData, data, loading, error };
}

//  Numeric fields validation:
export function numericValidation(
  value: string,
  type: "text" | "number" | "date" | "select"
) {
  if (type !== "number") return value;
  return value.replace(/\D+/g, "");
}

// Remove the mask and shows the real text:
export function getRealValue(value: string): string {
  return value.replace(/[\W_]+/g, "");
}

// Data parsing callback:
export function parseCallbackData(data: IDialog): object {
  //  Array that contains all options of the dialog object:
  let optionsArray: IDialogOption[] = [];

  //  Condense all dialog options into one array:
  data.steps.forEach((el) => {
    optionsArray = [...optionsArray, ...el.options];
  });

  let parsed: object = {};

  function validateParsedValue(
    type: "text" | "number" | "date" | "select",
    value: string,
    removeMaskOnParse?: boolean
  ) {
    if (type === "number") {
      if (removeMaskOnParse) return +getRealValue(value);
      return +value;
    }

    if (removeMaskOnParse) return getRealValue(value);
    return value;
  }

  optionsArray.forEach((el) => {
    parsed = {
      ...parsed,
      [el.name]: validateParsedValue(el.type, el.value, el.removeMaskOnParse),
    };
  });

  return parsed;
}
