import { IFlightData } from "../../../components/AircraftCard/types";

export interface ILogbookSimpleResponse {
  date: string;
  logbook: ISimpleLogbookInfo[];
}

export interface ISimpleLogbookInfo {
  id: string;
  to: IFlightData;
  from: IFlightData;
  takeOffHour: string;
  landingHour: string;
}
