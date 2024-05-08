import { Route } from "react-router-dom";
import { authenticationRoutes } from "../features/authentication/Routes";
import { aircraftRoutes } from "../features/aircraft/Routes";
import { dashboardRoutes } from "../features/dashboard/Routes";

export const routeGenerator = () => {
  const routeArray = [
    ...authenticationRoutes,
    ...aircraftRoutes,
    ...dashboardRoutes,
  ];

  return routeArray.map((route) => (
    <Route key={`${route.path}`} path={route.path} element={route.element} />
  ));
};
