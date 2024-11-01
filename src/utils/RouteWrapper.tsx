import { Route } from "react-router-dom";
import { authenticationRoutes } from "../features/authentication/Routes";
import { aircraftRoutes } from "../features/aircraft/Routes";
import { dashboardRoutes } from "../features/dashboard/Routes";
import { myProfileRoutes } from "../features/myProfile/Routes";
import { logbookRoutes } from "../features/logbook/Routes";

export const routeGenerator = () => {
  const routeArray = [
    ...authenticationRoutes,
    ...aircraftRoutes,
    ...dashboardRoutes,
    ...myProfileRoutes,
    ...logbookRoutes,
  ];

  return routeArray.map((route) => (
    <Route key={`${route.path}`} path={route.path} element={route.element} />
  ));
};
