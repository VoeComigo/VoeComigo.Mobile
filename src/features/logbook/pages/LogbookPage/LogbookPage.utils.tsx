import { IFilter } from "../../../../components/LogbookFilter/LogbookFilter.utils";

export function getFilterQueryParam(filters: IFilter[]) {
  let aux: string = "?";
  filters.forEach((filter, i) => {
    aux += `${filter.type}=${filter.value}${i + 1 < filters.length ? "&" : ""}`;
  });
  return aux;
}
