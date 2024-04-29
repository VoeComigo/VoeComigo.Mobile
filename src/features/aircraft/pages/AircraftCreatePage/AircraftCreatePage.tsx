import { DialogGenerator } from "../../../../components";
import { aircraftTemplate } from "./DialogTemplate/DialogTemplate";
import { useCreateAircraft } from "../../hooks";
import { IAircraftCreation } from "../../hooks/useCreateAircraft";
import { useNotificationContext } from "../../../../contexts";
import { useState } from "react";

export const AircraftCreatePage = () => {
  const { createAircraft, loading } = useCreateAircraft();
  const { createNotification } = useNotificationContext();
  const [requestStatus, setRequestStatus] = useState<
    "success" | "error" | undefined
  >(undefined);

  function handleCreate(e: object) {
    createAircraft(undefined, e as IAircraftCreation)
      .then(() => {
        createNotification({
          type: "success",
          title: "Aeronave cadastrada",
          text: "Aeronave cadastrada com sucesso!",
        });
        setRequestStatus("success");
      })
      .catch(() => {
        createNotification({
          type: "error",
          title: "Erro ao cadastrar aeronave",
          text: "Ocorreu um erro ao cadastrar a aeronave, revise os campos e tente novamente!",
        });
        setRequestStatus("error");
      });
  }

  return (
    <DialogGenerator
      template={aircraftTemplate}
      disableFetch={loading}
      requestStatus={requestStatus}
      requestStatusCallback={setRequestStatus}
      responseCallback={handleCreate}
    />
  );
};
