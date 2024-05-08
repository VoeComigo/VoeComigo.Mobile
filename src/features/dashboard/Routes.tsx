import { IRoute, RouteProtection } from "../../utils/RouteProtection";
import { DashboardPage } from "./pages";

export const dashboardRoutes: IRoute[] = [
  {
    path: "/dashboard",
    element: (
      <RouteProtection isProtected>
        <DashboardPage />
      </RouteProtection>
    ),
  },
];
