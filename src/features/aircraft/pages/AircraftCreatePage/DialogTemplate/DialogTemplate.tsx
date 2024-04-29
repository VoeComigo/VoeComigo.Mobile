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
import BadgeIcon from "@mui/icons-material/Badge";
import { IDialog } from "../../../../../components/DialogGenerator/DialogGenerator";
import { getManufactor } from "../DialogRequest/getManufactor";
import { getModel } from "../DialogRequest/getModel";
import { inputMask } from "../../../../../utils/inputMask";

// Flight type options:
const flightTypeOptions = [
  {
    value: "VRFD",
    title: "VRF - Diurno",
  },
  {
    value: "VRFN",
    title: "VRF - Noturno",
  },
  {
    value: "IFRD",
    title: "IFR - Diurno",
  },
  {
    value: "IFRN",
    title: "IFR - Noturno",
  },
];

// Registry Category options:
const registryCategoryOptions = [
  {
    value: "PET",
    title: "Privada experimental",
  },
  {
    value: "TPP",
    title: "Privada serviços aéreos privados",
  },
  {
    value: "PRI",
    title: "Privada instrução",
  },
  {
    value: "TPX",
    title: "Privada serviço de transporte público não regular",
  },
  {
    value: "SAR",
    title: "Privada serviço aéreo especializado público",
  },
];

//  Content related with the ticket modal:
export const aircraftTemplate: IDialog = {
  callbackUrl: "/aircraft",
  successPhrase: "Aeronave criada com sucesso!!",
  steps: [
    {
      title: "Dados da aeronave",
      isValid: false,
      options: [
        {
          name: "registration",
          title: "Matrícula",
          type: "text",
          icon: <ListAltIcon />,
          value: "",
          minLenght: 5,
          maxLenght: 5,
          inputMask: inputMask("registration"),
          removeMaskOnParse: true,
          isValid: false,
          required: true,
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
          required: false,
        },
        {
          name: "modelId",
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
          required: true,
        },
        {
          name: "manufacturingYear",
          title: "Ano de fabricação",
          type: "number",
          minLenght: 4,
          maxLenght: 4,
          icon: <ConstructionIcon />,
          value: "",
          isValid: false,
          required: true,
        },
        {
          name: "serialNumber",
          title: "Nº de série",
          type: "text",
          icon: <FormatListNumberedIcon />,
          value: "",
          isValid: false,
          required: true,
        },
      ],
    },
    {
      title: "Configuração da aeronave",
      isValid: false,
      options: [
        {
          name: "passengerAmount",
          title: "Nº de passageiros",
          type: "number",
          icon: <PeopleAltIcon />,
          value: "",
          isValid: false,
          required: true,
        },
        {
          name: "maxCrewMembers",
          title: "Máximo de tripulantes",
          type: "number",
          icon: <GroupsIcon />,
          value: "",
          isValid: false,
          required: true,
        },
        {
          name: "seatsAmount",
          title: "Nº de assentos",
          type: "number",
          icon: <AirlineSeatReclineExtraIcon />,
          value: "",
          isValid: false,
          required: true,
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
          type: "select",
          icon: <ConnectingAirportsIcon />,
          value: "",
          isValid: false,
          fetchedCollection: flightTypeOptions,
          required: true,
        },
        {
          name: "registrationCategory",
          title: "Categoria de registro",
          type: "select",
          icon: <CategoryIcon />,
          value: "",
          isValid: false,
          fetchedCollection: registryCategoryOptions,
          required: true,
        },
        {
          name: "expirationCVA",
          title: "Data de validade do CVA",
          type: "date",
          icon: <EventRepeatIcon />,
          value: "",
          isValid: false,
          required: true,
        },
      ],
    },
    {
      title: "Informações do operador e proprietário",
      isValid: false,
      options: [
        {
          name: "operatorName",
          title: "Operador",
          type: "text",
          icon: <EmojiPeopleIcon />,
          value: "",
          isValid: false,
          required: true,
        },
        {
          name: "ownerName",
          title: "Proprietário",
          type: "text",
          icon: <HailIcon />,
          value: "",
          isValid: false,
          required: true,
        },
        {
          name: "operatorCpfCnpj",
          title: "CPF ou CNPJ Operador",
          type: "text",
          minLenght: 11,
          maxLenght: 14,
          icon: <BadgeIcon />,
          value: "",
          inputMask: inputMask("cpfCnpj"),
          removeMaskOnParse: true,
          isValid: false,
          required: true,
        },
        {
          name: "ownerCpfCnpj",
          title: "CPF ou CNPJ Proprietário",
          type: "text",
          minLenght: 11,
          maxLenght: 14,
          icon: <BadgeIcon />,
          value: "",
          inputMask: inputMask("cpfCnpj"),
          removeMaskOnParse: true,
          isValid: false,
          required: true,
        },
      ],
    },
  ],
};
