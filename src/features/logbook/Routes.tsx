import { IRoute, RouteProtection } from "../../utils/RouteProtection";
import { LogbookPage } from "./pages/LogbookPage/LogbookPage";

export const logbookRoutes: IRoute[] = [
  {
    path: "/logbook/:aircraftID/:registration",
    element: (
      <RouteProtection isProtected>
        <LogbookPage />
      </RouteProtection>
    ),
  },
];
