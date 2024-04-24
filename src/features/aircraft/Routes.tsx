import { IRoute, RouteProtection } from "../../utils/RouteProtection";
import {
  AircraftBindPage,
  AircraftCreatePage,
  AircraftCrewPage,
  AircraftPage,
} from "./pages";

export const aircraftRoutes: IRoute[] = [
  {
    path: "/aircraft",
    element: (
      <RouteProtection isProtected>
        <AircraftPage />
      </RouteProtection>
    ),
  },
  {
    path: "/aircraft-bind",
    element: (
      <RouteProtection isProtected>
        <AircraftBindPage />
      </RouteProtection>
    ),
  },
  {
    path: "/aircraft-crew/:id",
    element: (
      <RouteProtection isProtected>
        <AircraftCrewPage />
      </RouteProtection>
    ),
  },
  {
    path: "/aircraft-create",
    element: (
      <RouteProtection isProtected>
        <AircraftCreatePage />
      </RouteProtection>
    ),
  },
];
