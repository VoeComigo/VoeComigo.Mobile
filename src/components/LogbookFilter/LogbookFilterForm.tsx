import { useForm } from "react-hook-form";
import * as S from "./LogbookFilter.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { FILTER_TYPES, getInputLabelByFilter } from "./LogbookFilter.utils";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import { useMemo } from "react";
import { useModalContext } from "../../contexts/ModalContext/ModalContext";

interface IFilterForm {
  startDate?: string;
  endDate?: string;
  from?: string;
  to?: string;
}

const SCHEMA = yup.object({
  startDate: yup.string().min(1).typeError("Valor deve ser numérico"),
  endDate: yup.string().min(1).typeError("Valor deve ser numérico"),
  from: yup.string().min(4).max(4).typeError("Valor deve ser numérico"),
  to: yup.string().min(4).max(4).typeError("Valor deve ser numérico"),
});

export const FilterForm = ({ filterIndex, filterType, onChange }: Props) => {
  //  UseForm:
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IFilterForm>({
    mode: "all",
    resolver: yupResolver<IFilterForm>(SCHEMA),
  });

  // Modal controller:
  const { toggleModal } = useModalContext();

  const inputType = useMemo(() => {
    if (filterType === "startDate" || filterType === "endDate") return "date";
    return "text";
  }, [filterType]);

  function onSubmit(e: IFilterForm) {
    let value: string = "";
    if (filterType === "startDate") value = e.startDate || "";
    if (filterType === "endDate") value = e.endDate || "";
    if (filterType === "from") value = e.from || "";
    if (filterType === "to") value = e.to || "";
    onChange(filterIndex, value, true);
    toggleModal();
    reset();
  }

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register(filterType)}
        variant="outlined"
        size="small"
        label={getInputLabelByFilter(filterType)}
        fullWidth
        type={inputType}
        inputProps={{ maxLength: inputType === "text" ? 4 : undefined }}
        InputLabelProps={{ shrink: true }}
        error={!!errors.root}
        helperText={errors.root?.message}
      />
      <Button
        className="primary"
        type="submit"
        variant="contained"
        disabled={!isValid}
        disableElevation
      >
        APLICAR FILTRO
      </Button>
    </S.FormWrapper>
  );
};

type Props = {
  filterIndex: number;
  filterType: FILTER_TYPES;
  onChange: (i: number, value: string, isActive: boolean) => void;
};
