import { IRoute, RouteProtection } from "../../utils/RouteProtection";
import { MyProfilePage } from "./pages/MyProfilePage/MyProfilePage";

export const myProfileRoutes: IRoute[] = [
  {
    path: "/my-profile",
    element: (
      <RouteProtection isProtected>
        <MyProfilePage />
      </RouteProtection>
    ),
  },
];
