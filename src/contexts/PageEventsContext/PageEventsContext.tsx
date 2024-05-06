import { createContext, useContext, useState } from "react";
import { LoadingContainer } from "./components/LoadingContainer/LoadingContainer";
import { ErrorContainer } from "./components/ErrorContainer/ErrorContainer";

// Page events status type:
export type PageEventsStatus = "loading" | "error" | "done";

//  Provider that wraps all default page events generated:
export const PageEventsProvider = ({ status }: ProviderProps) => {
  if (status === "loading") return <LoadingContainer />;
  if (status === "error") return <ErrorContainer />;
  return <></>;
};

type ProviderProps = {
  status: PageEventsStatus;
};

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
      <PageEventsProvider status={pageEvent} />
      {pageEvent !== "error" && children}
    </PageEventsContext.Provider>
  );
};
