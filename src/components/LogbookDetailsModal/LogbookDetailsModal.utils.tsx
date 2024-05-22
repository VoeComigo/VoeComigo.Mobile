import { mask } from "../../utils/mask";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
import AirplanemodeInactiveOutlinedIcon from "@mui/icons-material/AirplanemodeInactiveOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import FlightLandOutlinedIcon from "@mui/icons-material/FlightLandOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import CloudOffOutlinedIcon from "@mui/icons-material/CloudOffOutlined";
import FlightClassOutlinedIcon from "@mui/icons-material/FlightClassOutlined";
import ConnectingAirportsOutlinedIcon from "@mui/icons-material/ConnectingAirportsOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import { getFlightNature } from "../../utils/parserUtils";

type Props = {
  engineStartUp: string;
  engineCut: string;
  landingQuantity: number;
  cycleQuantity: number;
  takeOffHour: string;
  landingHour: string;
  totalHour: string;
  dayTime: string;
  nightly: string;
  ifr: string;
  ifrCapota: string;
  flightNature: string;
};

export function getStyleClass(num: number) {
  if (num === 0) return "first-table";
  if (num === 1) return "second-table";
  if (num === 2) return "third-table";
  return "";
}

export function generateCardInfo({
  engineStartUp,
  engineCut,
  landingQuantity,
  cycleQuantity,
  takeOffHour,
  landingHour,
  totalHour,
  dayTime,
  nightly,
  ifr,
  ifrCapota,
  flightNature,
}: Props) {
  return [
    [
      {
        title: "Partida",
        value: mask("time", engineStartUp),
        icon: <AirplanemodeActiveOutlinedIcon />,
      },
      {
        title: "Decolagem",
        value: mask("time", takeOffHour),
        icon: <FlightTakeoffOutlinedIcon />,
      },
      {
        title: "Pouso",
        value: mask("time", landingHour),
        icon: <FlightLandOutlinedIcon />,
      },
      {
        title: "Corte",
        value: mask("time", engineCut),
        icon: <AirplanemodeInactiveOutlinedIcon />,
      },
      {
        title: "Total",
        value: totalHour,
        icon: <QueryBuilderOutlinedIcon />,
      },
    ],
    [
      {
        title: "Diurno",
        value: dayTime,
        icon: <WbSunnyOutlinedIcon />,
      },
      {
        title: "Noturno",
        value: nightly,
        icon: <DarkModeOutlinedIcon />,
      },
      {
        title: "IFR",
        value: ifr,
        icon: <ThunderstormOutlinedIcon />,
      },
      {
        title: "IFR capota",
        value: ifrCapota,
        icon: <CloudOffOutlinedIcon />,
      },
    ],
    [
      {
        title: "Natureza do voo",
        value: getFlightNature(flightNature),
        icon: <FlightClassOutlinedIcon />,
      },
      {
        title: "Pousos",
        value: landingQuantity,
        icon: <FlightLandOutlinedIcon />,
      },
      {
        title: "Ciclos",
        value: cycleQuantity,
        icon: <ConnectingAirportsOutlinedIcon />,
      },
    ],
  ];
}
