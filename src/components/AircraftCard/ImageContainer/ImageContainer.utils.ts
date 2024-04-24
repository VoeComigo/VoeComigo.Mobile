import { NotificationStatus } from "../../../contexts/NotificationContext/NotificationContext";

export const NOTIFICATION_TYPES = {
  SUCCESS: {
    type: "success" as NotificationStatus,
    title: "Alteração realizada",
    text: "Alteração de aeronave favorita atualizada com sucesso!",
  },
  ERROR: {
    type: "error" as NotificationStatus,
    title: "Erro ao favoritar",
    text: "Ocorreu um erro ao alterar a aeronave, tente novamente mais tarde!",
  },
};
