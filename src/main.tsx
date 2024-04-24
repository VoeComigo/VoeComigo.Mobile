import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { NotificationContextProvider } from "./contexts/index.ts";
import { routeGenerator } from "./utils/RouteWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NotificationContextProvider>
    <BrowserRouter basename="/">
      <Routes>{routeGenerator()}</Routes>
    </BrowserRouter>
  </NotificationContextProvider>
);
