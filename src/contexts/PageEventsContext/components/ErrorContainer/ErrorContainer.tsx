import * as S from "../../PageEventsContext.styles";
import ErrorIcon from "../../../../assets/error.png";
import { EmptyCard } from "../../../../components/EmptyCard/EmptyCard";

export const ErrorContainer = () => {
  function reloadPage() {
    window.location.reload();
  }

  return (
    <S.Container>
      <EmptyCard
        title="A pista estava ocupada e não conseguimos atender a sua solicitação. Tente novamente em alguns minutos!"
        buttonLabel="Tentar novamente"
        customIcon={ErrorIcon}
        onClick={() => reloadPage()}
      />
    </S.Container>
  );
};
