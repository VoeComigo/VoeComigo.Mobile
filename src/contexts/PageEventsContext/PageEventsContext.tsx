import { createContext, useContext, useState } from "react";
import { LoadingContainer } from "./components/LoadingContainer/LoadingContainer";
import { ErrorContainer } from "./components/ErrorContainer/ErrorContainer";

// Page events status type:
export type PageEventsStatus = "loading" | "error" | "done";

//  Actual notification context:
type PageEventsContextType = {
  onChangeEvent: (status: PageEventsStatus) => void;
};

const PageEventsContext = createContext<PageEventsContextType>({
  onChangeEvent: function () {},
});

// Hook that export the page events for other components:
export const usePageEventsHandling = () => {
  return useContext(PageEventsContext);
};

export const PageEventsContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [pageEvent, setPageEvent] = useState<PageEventsStatus>("done");

  //  Change event for the page status:
  function onChangeEvent(e: PageEventsStatus) {
    setPageEvent(e);
  }

  return (
    <PageEventsContext.Provider value={{ onChangeEvent: onChangeEvent }}>
      <LoadingContainer
        className={pageEvent === "loading" ? "loader-show" : "loader-hide"}
      />
      {pageEvent !== "error" ? children : <ErrorContainer />}
    </PageEventsContext.Provider>
  );
};
