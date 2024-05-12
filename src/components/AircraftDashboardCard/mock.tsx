import { IAircraft } from "../AircraftCard/types";

export const dashboardAircraftMock: IAircraft = {
  id: "1",
  registration: "PX-XXX",
  model: {
    id: "",
    description: "",
    icaoType: "",
    requiredLicense: "",
    type: "",
    manufacturer: {
      id: "",
      description: "",
    },
  },
  status: "ACTIVE",
  isFavorite: false,
  role: "",
  image: null,
  owner: {
    name: "",
    cpfCnpj: "",
  },
  operator: {
    name: "",
    cpfCnpj: "",
  },
  manufacturingYear: "",
  serieNumber: "",
  flightType: "",
  registrationCategory: "",
  passengerAmount: 0,
  seatsAmount: 0,
  maxCrewMembers: 0,
  totalHours: "100:25",
  hasOpenningTerm: true,
  flightPlan: {
    date: "2024-05-12",
    from: {},
    to: {},
  },
};
