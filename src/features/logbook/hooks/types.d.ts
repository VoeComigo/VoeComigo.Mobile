import {
  IAircraftModel,
  IFlightData,
} from "../../../components/AircraftCard/types";
import { IPersonData } from "../../aircraft/hooks/useGetCrew";

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
  totalHour: string;
}

// Logbook details:
export interface ILogbookCrew {
  id: string;
  person: IPersonData;
  onBoardFunction: string;
  presentation: string;
  isSigned: boolean;
  signedAt: string | null;
}
export interface ILogbookDiscrepancy {
  id: string;
  report: string;
  correctiveAction: string | null;
  correctiveActionDate: string | null;
  responsiblePerson: IPersonData | null;
}
export interface IAircraftSimpleResponse {
  id: string;
  registration: string;
  model: IAircraftModel;
}
export interface ILogbookDetailsResponse extends ISimpleLogbookInfo {
  date: string;
  engineStartUp: string;
  engineCut: string;
  landingQuantity: number;
  cycleQuantity: number;
  fuelQuantity: number;
  dayTime: string;
  nightly: string;
  ifr: string;
  ifrCapota: string;
  flightNature: string;
  pob: number;
  load: number;
  crew: ILogbookCrew[];
  discrepancy: ILogbookDiscrepancy[];
  aircraft: IAircraftSimpleResponse;
}
