import * as S from "./Form.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { BASIC_INFORMATION_DEFAULT } from "./Form.defaults";
import { BASIC_INFORMATION_SCHEMA } from "./Form.validators";
import { mask } from "../../../../../utils/mask";
import { useEffect } from "react";
import { useModalContext } from "../../../../../contexts/ModalContext/ModalContext";

export interface IBasicInfoForm {
  date: string;
  from: string;
  to: string;
  load: number | null;
  fuelQuantity: number | null;
  pob: number | null;
}

export const BasicInformation = ({
  registration,
  defaultValues,
  onSubmit,
}: Props) => {
  //  UseForm:
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IBasicInfoForm>({
    defaultValues: BASIC_INFORMATION_DEFAULT,
    mode: "all",
    resolver: yupResolver<IBasicInfoForm>(BASIC_INFORMATION_SCHEMA),
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  // Modal context:
  const { toggleModal } = useModalContext();

  function submitCallback(e: IBasicInfoForm) {
    onSubmit(e);
    toggleModal();
  }

  return (
    <S.Form key="basic" onSubmit={handleSubmit(submitCallback)}>
      <div className="modal-title-area">
        <p className="title">Informações básicas</p>
        <p className="subtitle">{mask("registration", registration)}</p>
      </div>
      <TextField
        {...register("date")}
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        label="Data do registro"
        type="date"
        size="small"
        fullWidth
        error={!!errors.date}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("from")}
        variant="outlined"
        size="small"
        label="De"
        inputProps={{ maxLength: 4 }}
        InputLabelProps={{ shrink: true }}
        fullWidth
        error={!!errors.date}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("to")}
        variant="outlined"
        size="small"
        label="Para"
        inputProps={{ maxLength: 4 }}
        InputLabelProps={{ shrink: true }}
        fullWidth
        error={!!errors.date}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("load")}
        variant="outlined"
        size="small"
        label="Peso"
        type="number"
        InputLabelProps={{ shrink: true }}
        fullWidth
        error={!!errors.date}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("fuelQuantity")}
        variant="outlined"
        size="small"
        label="Combustível"
        type="number"
        InputLabelProps={{ shrink: true }}
        fullWidth
        error={!!errors.date}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("pob")}
        variant="outlined"
        size="small"
        label="Pessoas a bordo"
        type="number"
        InputLabelProps={{ shrink: true }}
        fullWidth
        error={!!errors.date}
        helperText={errors.root?.message}
      />
      <Button
        className="primary"
        type="submit"
        variant="contained"
        disabled={!isValid}
        disableElevation
      >
        ACEITAR
      </Button>
    </S.Form>
  );
};

type Props = {
  registration: string;
  defaultValues: IBasicInfoForm;
  onSubmit: (e: IBasicInfoForm) => void;
};
