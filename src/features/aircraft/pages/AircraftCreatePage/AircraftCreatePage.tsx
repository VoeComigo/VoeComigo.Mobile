import { useNavigate } from "react-router-dom";
import { DialogGenerator } from "../../../../components";
import { IAircraftCreate } from "./AircraftCreatePage.utils";
import { aircraftTemplate } from "./DialogTemplate/DialogTemplate";

export const AircraftCreatePage = () => {
  const navigate = useNavigate();

  function teste(e: any): IAircraftCreate {
    console.log(e);
    return e;
  }

  return (
    <DialogGenerator
      template={aircraftTemplate}
      responseCallback={(e) => teste(e)}
    />
  );
};
