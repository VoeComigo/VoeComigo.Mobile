export interface IAircraft {
  id: string;
  registration: string; // PX-0000
  model: IAircraftModel; // C175
  status: "ACTIVE" | "INACTIVE";
  isFavorite: boolean;
  role: string;
  image: string | null;
  owner: IPerson;
  operator: IPerson;
  manufacturingYear: string;
  serieNumber: string;
  flightType: string;
  registrationCategory: string;
  passengerAmount: number;
  seatsAmount: number;
  maxCrewMembers: number;
  totalHours: string;
  hasOpeningTerm: boolean;
  flightPlan: IFlightPlan | null;
}

export interface IFlightPlan {
  date: string;
  from: IFlightData;
  to: IFlightData;
}

export interface IFlightData {
  airportName?: string;
  icaoCode?: string;
  city?: string;
  state?: string;
}

export interface IAircraftModel {
  id: string;
  description: string;
  icaoType: string;
  requiredLicense: string;
  type: string;
  manufacturer: IManufacturer;
}

export interface IPerson {
  name: string;
  cpfCnpj: string;
}

export interface IManufacturer {
  id: string;
  description: string;
}
