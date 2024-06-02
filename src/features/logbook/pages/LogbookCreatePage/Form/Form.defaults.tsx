import { IBasicInfoForm } from "./BasicInformation";
import { IBasicRegistryForm } from "./RegistryInformation";

export const BASIC_INFORMATION_DEFAULT: IBasicInfoForm = {
  date: "",
  from: "",
  to: "",
  load: null,
  fuelQuantity: null,
  pob: null,
};

export const BASIC_REGISTRY_DEFAULT: IBasicRegistryForm = {
  engineStartUp: "",
  takeOffHour: "",
  landingHour: "",
  engineCut: "",
  dayTime: "",
  nightly: "",
  ifr: "",
  ifrCapota: "",
  flightNature: "",
  landingQuantity: null,
  cycleQuantity: null,
};
