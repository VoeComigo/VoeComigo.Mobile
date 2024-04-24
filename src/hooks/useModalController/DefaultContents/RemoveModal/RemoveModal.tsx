import { Button } from "@mui/material";
import * as S from "./RemoveModal.styles";

export const RemoveModal = ({
  labels,
  onPrimaryClick,
  onSecondaryClick,
  options,
}: Props) => {
  return (
    <S.Content>
      <h1 className="title">{labels.title}</h1>
      <Button
        className={"secondary-button"}
        type="submit"
        variant="outlined"
        onClick={onSecondaryClick}
        disabled={options?.disableSecondary}
        disableElevation
      >
        {labels.secondaryLabel}
      </Button>
      <Button
        className={"red-button"}
        type="submit"
        variant="contained"
        onClick={onPrimaryClick}
        disabled={options?.disablePrimary}
        disableElevation
      >
        {labels.primaryLabel}
      </Button>
    </S.Content>
  );
};

type Props = {
  labels: {
    title: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  options?: {
    disablePrimary?: boolean;
    disableSecondary?: boolean;
  };
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
};
