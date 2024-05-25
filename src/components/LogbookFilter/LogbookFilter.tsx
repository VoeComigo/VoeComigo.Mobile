import * as S from "./LogbookFilter.styles";
import { ChipButton } from "../ChipButton/ChipButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const LogbookFilter = ({}: Props) => {
  const filterProps = {
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
  };
  return (
    <S.Container>
      <ChipButton
        className="filter-button"
        text={`Data incial`}
        {...filterProps}
      />
      <ChipButton
        className="filter-button"
        text={`Data final`}
        {...filterProps}
      />
      <ChipButton className="filter-button" text={`Voo de`} {...filterProps} />
      <ChipButton
        className="filter-button"
        text={`Voo para`}
        {...filterProps}
      />
    </S.Container>
  );
};

type Props = {};
