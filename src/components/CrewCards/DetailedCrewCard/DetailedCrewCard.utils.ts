import { NotificationStatus } from "../../../contexts/NotificationContext/NotificationContext";

export const NOTIFICATION_TYPES = {
  SUCCESS: {
    type: "success" as NotificationStatus,
    title: "Removido com sucesso",
    text: "Tripulante removido com sucesso!",
  },
  ERROR: {
    type: "error" as NotificationStatus,
    title: "Erro ao remover",
    text: "Ocorreu um erro ao remover o tripulante, tente novamente mais tarde!",
  },
};
