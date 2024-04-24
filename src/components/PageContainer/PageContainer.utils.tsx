import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

//  Content related with the ticket modal:
export const modalButtonContent = {
  bind: {
    color: { initial: "#9B83F5", end: "#4B1FED" },
    title: "Vincular",
    subtitle:
      "Vincule-se a uma aeronave existente e faça parte de sua tripulação",
    icon: <Diversity1OutlinedIcon />,
  },
  create: {
    color: { initial: "#0083FF", end: "#005AD1" },
    title: "Criar",
    subtitle: "Realize o cadastro de uma nova aeronave para gerenciamento",
    icon: <AddCircleOutlineOutlinedIcon />,
  },
};
