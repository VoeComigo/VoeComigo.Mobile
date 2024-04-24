export interface IAircraftCreate {
  id: string | null;
  creationYear: number;
  expirationCVA: string;
  flightType: number;
  manufacturer: number;
  model: number;
  operator: string;
  owner: string;
  passengerNumber: number;
  registry: string;
  registryCategory: string;
  seatsAmount: number;
  serialNumber: number;
  tripulationNumber: number;
}
