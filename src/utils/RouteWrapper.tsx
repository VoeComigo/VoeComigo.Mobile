import { Route } from "react-router-dom";
import { newUserRoutes } from "../features/newUser/Routes";
import { aircraftRoutes } from "../features/aircraft/Routes";

export const routeGenerator = () => {
  const routeArray = [...newUserRoutes, ...aircraftRoutes];

  return routeArray.map((route) => (
    <Route key={`${route.path}`} path={route.path} element={route.element} />
  ));
};
