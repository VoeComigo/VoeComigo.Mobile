import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export enum FILTER_TYPES {
  START_DATE = "startDate",
  END_DATE = "endDate",
  FROM = "from",
  TO = "to",
}

export interface IFilter {
  isActive: boolean;
  type: FILTER_TYPES;
  value: string;
}

export const styleHandler = {
  normal: {
    icon: <KeyboardArrowDownIcon />,
    iconProps: {
      size: "16",
      color: "#fdfdfd",
    },
    textProps: { size: "12", color: "#fdfdfd" },
    backgroundColor: "#0083FF",
    borderProps: {
      tickness: "1",
      color: "#fdfdfd",
    },
  },
  active: {
    icon: <HighlightOffIcon />,
    iconProps: {
      size: "16",
      color: "#0083FF",
    },
    textProps: { size: "12", color: "#0083FF" },
    backgroundColor: "#fdfdfd",
    borderProps: {
      tickness: "1",
      color: "#fdfdfd",
    },
  },
};

export const DEFAULT_VALUES: IFilter[] = [
  {
    isActive: false,
    type: FILTER_TYPES.START_DATE,
    value: "",
  },
  {
    isActive: false,
    type: FILTER_TYPES.END_DATE,
    value: "",
  },
  {
    isActive: false,
    type: FILTER_TYPES.FROM,
    value: "",
  },
  {
    isActive: false,
    type: FILTER_TYPES.TO,
    value: "",
  },
];

export const filterProps = {
  iconProps: {
    size: "16",
    color: "#fdfdfd",
  },
  textProps: { size: "12", color: "#fdfdfd" },
  backgroundColor: "#0083FF",
  borderProps: {
    tickness: "1",
    color: "#fdfdfd",
  },
};

export function getInputLabelByFilter(type: FILTER_TYPES) {
  if (type === FILTER_TYPES.START_DATE) return "Data inicial";
  if (type === FILTER_TYPES.END_DATE) return "Data final";
  if (type === FILTER_TYPES.FROM) return "Código ICAO";
  if (type === FILTER_TYPES.TO) return "Código ICAO";
  return "";
}
