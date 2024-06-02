import { IRoute, RouteProtection } from "../../utils/RouteProtection";
import { LogbookCreatePage } from "./pages/LogbookCreatePage/LogbookCreatePage";
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
  {
    path: "/logbook/:aircraftID/:registration/create",
    element: (
      <RouteProtection isProtected>
        <LogbookCreatePage />
      </RouteProtection>
    ),
  },
];
