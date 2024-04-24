import { IDialog } from "./DialogGenerator";
import ListAltIcon from "@mui/icons-material/ListAlt";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import ConstructionIcon from "@mui/icons-material/Construction";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import CategoryIcon from "@mui/icons-material/Category";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import HailIcon from "@mui/icons-material/Hail";
import { getManufactor, getModel } from "./mock.api";

//  Content related with the ticket modal:
export const mockedDialog: IDialog = {
  callbackUrl: "/aircraft",
  successPhrase: "Aeronave criada com sucesso!!",
  steps: [
    {
      title: "Dados da aeronave",
      isValid: false,
      options: [
        {
          name: "registry",
          title: "Matrícula",
          type: "text",
          icon: <ListAltIcon />,
          value: "",
          isValid: false,
        },
        {
          name: "manufacturer",
          title: "Fabricante",
          type: "select",
          icon: <WarehouseIcon />,
          value: "",
          isValid: false,
          //  Api fetching:
          hasDynamicData: true,
          dynamicData: {
            fetchDependencyName: null,
            fetchCall: getManufactor,
          },
        },
        {
          name: "model",
          title: "Modelo",
          type: "select",
          icon: <QrCode2Icon />,
          value: "",
          isValid: false,
          //  Api fetching:
          hasDynamicData: true,
          dynamicData: {
            fetchDependencyName: "manufacturer",
            fetchCall: getModel,
          },
        },
        {
          name: "creationYear",
          title: "Ano de fabricação",
          type: "number",
          maxLenght: 4,
          icon: <ConstructionIcon />,
          value: "",
          isValid: false,
        },
        {
          name: "serialNumber",
          title: "Nº de série",
          type: "number",
          icon: <FormatListNumberedIcon />,
          value: "",
          isValid: false,
        },
      ],
    },
    {
      title: "Configuração da aeronave",
      isValid: false,
      options: [
        {
          name: "passengerNumber",
          title: "Nº de passageiros",
          type: "number",
          icon: <PeopleAltIcon />,
          value: "",
          isValid: false,
        },
        {
          name: "tripulationNumber",
          title: "Tripulação mínima",
          type: "number",
          icon: <GroupsIcon />,
          value: "",
          isValid: false,
        },
        {
          name: "seatsAmount",
          title: "Nº de assentos",
          type: "number",
          icon: <AirlineSeatReclineExtraIcon />,
          value: "",
          isValid: false,
        },
      ],
    },
    {
      title: "Tipo de voo e vencimento",
      isValid: false,
      options: [
        {
          name: "flightType",
          title: "Tipo de voo autorizado",
          type: "text",
          icon: <ConnectingAirportsIcon />,
          value: "",
          isValid: false,
        },
        {
          name: "registryCategory",
          title: "Categoria de registro",
          type: "text",
          icon: <CategoryIcon />,
          value: "",
          isValid: false,
        },
        {
          name: "expirationCVA",
          title: "Data de validade do CVA",
          type: "date",
          icon: <EventRepeatIcon />,
          value: "",
          isValid: false,
        },
      ],
    },
    {
      title: "Informações do operador e proprietário",
      isValid: false,
      options: [
        {
          name: "operator",
          title: "Operador",
          type: "text",
          icon: <EmojiPeopleIcon />,
          value: "",
          isValid: false,
        },
        {
          name: "owner",
          title: "Proprietário",
          type: "text",
          icon: <HailIcon />,
          value: "",
          isValid: false,
        },
      ],
    },
  ],
};
