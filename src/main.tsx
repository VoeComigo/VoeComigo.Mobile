import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { NotificationContextProvider } from "./contexts/index.ts";
import { routeGenerator } from "./utils/RouteWrapper.tsx";
import { PageEventsContextProvider } from "./contexts/PageEventsContext/PageEventsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PageEventsContextProvider>
    <NotificationContextProvider>
      <BrowserRouter basename="/">
        <Routes>{routeGenerator()}</Routes>
      </BrowserRouter>
    </NotificationContextProvider>
  </PageEventsContextProvider>
);
