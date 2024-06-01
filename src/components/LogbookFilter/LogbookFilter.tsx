import * as S from "./LogbookFilter.styles";
import { ChipButton } from "../ChipButton/ChipButton";
import { DEFAULT_VALUES, IFilter, styleHandler } from "./LogbookFilter.utils";
import { useState } from "react";
import { useModalContext } from "../../contexts/ModalContext/ModalContext";
import { FilterForm } from "./LogbookFilterForm";

export const LogbookFilter = ({ onChangeFilter, disable }: Props) => {
  const [filterParams, setFilterParams] = useState<IFilter[]>(DEFAULT_VALUES);

  //  Filter object update routine:
  function updateFilter(i: number, value: string, isActive: boolean) {
    const aux = [...filterParams];
    aux[i].isActive = isActive;
    aux[i].value = value;
    setFilterParams(aux);
    onChangeFilter(aux); // Callback to logbook page
  }

  //  Modal controller:
  const { toggleModal, setModalContent, setModalStyle } = useModalContext();
  function onShowDetails(i: number) {
    setModalStyle("normal");
    setModalContent(
      <FilterForm
        key={i}
        filterIndex={i}
        filterType={filterParams[i].type}
        onChange={updateFilter}
      />
    );
    toggleModal();
  }

  function onClickFilter(i: number) {
    const aux = [...filterParams];
    if (aux[i].isActive) return updateFilter(i, "", false);
    return onShowDetails(i);
  }

  return (
    <S.Container>
      <ChipButton
        className="filter-button"
        text={`Data incial`}
        disabled={disable}
        onClick={() => onClickFilter(0)}
        {...(filterParams[0].isActive
          ? styleHandler.active
          : styleHandler.normal)}
      />
      <ChipButton
        className="filter-button"
        text={`Data final`}
        disabled={disable}
        onClick={() => onClickFilter(1)}
        {...(filterParams[1].isActive
          ? styleHandler.active
          : styleHandler.normal)}
      />
      <ChipButton
        className="filter-button"
        text={`De`}
        disabled={disable}
        onClick={() => onClickFilter(2)}
        {...(filterParams[2].isActive
          ? styleHandler.active
          : styleHandler.normal)}
      />
      <ChipButton
        className="filter-button"
        text={`Para`}
        disabled={disable}
        onClick={() => onClickFilter(3)}
        {...(filterParams[3].isActive
          ? styleHandler.active
          : styleHandler.normal)}
      />
    </S.Container>
  );
};

type Props = {
  disable?: boolean;
  onChangeFilter: (filters: IFilter[]) => void;
};
