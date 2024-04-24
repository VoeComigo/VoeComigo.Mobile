export interface IAircraft {
  id: string;
  registration: string; // PX-0000
  model: IAircraftModel; // C175
  status: "ACTIVE" | "INACTIVE";
  isFavorite: boolean;
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
