import { NotificationStatus } from "../../contexts/NotificationContext/NotificationContext";

export const ACCEPT_MESSAGES = {
  SUCCESS: {
    type: "success" as NotificationStatus,
    title: "Convite aceito",
    text: "Convite aceito com sucesso. Retorne a tela anterior para visualizar aeronave ou tripulação.",
  },
  ERROR: {
    type: "error" as NotificationStatus,
    title: "Erro ao aceitar o convite",
    text: "Ocorreu um erro ao aceitar o convite. Tente novamente mais tarde.",
  },
};

export const DECLINE_MESSAGES = {
  SUCCESS: {
    type: "success" as NotificationStatus,
    title: "Convite recusado",
    text: "Convite recusado com sucesso.",
  },
  ERROR: {
    type: "error" as NotificationStatus,
    title: "Erro ao recusar o convite",
    text: "Ocorreu um erro ao recusar o convite. Tente novamente mais tarde.",
  },
};
