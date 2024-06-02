import * as yup from "yup";

export const BASIC_INFORMATION_SCHEMA = yup.object({
  date: yup.string().required("Campo não pode estar vazio"),
  from: yup.string().required("Campo não pode estar vazio"),
  to: yup.string().required("Campo não pode estar vazio"),
  load: yup.number().required("Campo não pode estar vazio"),
  fuelQuantity: yup.number().required("Campo não pode estar vazio"),
  pob: yup.number().required("Campo não pode estar vazio"),
});

export const BASIC_REGISTRY_SCHEMA = yup.object({
  engineStartUp: yup.string().required("Campo não pode estar vazio"),
  takeOffHour: yup.string().required("Campo não pode estar vazio"),
  landingHour: yup.string().required("Campo não pode estar vazio"),
  engineCut: yup.string().required("Campo não pode estar vazio"),
  dayTime: yup.string().required("Campo não pode estar vazio"),
  nightly: yup.string().required("Campo não pode estar vazio"),
  ifr: yup.string().required("Campo não pode estar vazio"),
  ifrCapota: yup.string().required("Campo não pode estar vazio"),
  flightNature: yup.string().required("Campo não pode estar vazio"),
  landingQuantity: yup.number().required("Campo não pode estar vazio"),
  cycleQuantity: yup.number().required("Campo não pode estar vazio"),
});
