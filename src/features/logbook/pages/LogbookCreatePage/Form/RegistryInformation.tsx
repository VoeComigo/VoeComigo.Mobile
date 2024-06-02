import * as S from "./Form.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { BASIC_REGISTRY_DEFAULT } from "./Form.defaults";
import { BASIC_REGISTRY_SCHEMA } from "./Form.validators";
import { mask } from "../../../../../utils/mask";
import { useEffect } from "react";
import { useModalContext } from "../../../../../contexts/ModalContext/ModalContext";

export interface IBasicRegistryForm {
  engineStartUp: string;
  takeOffHour: string;
  landingHour: string;
  engineCut: string;
  dayTime: string;
  nightly: string;
  ifr: string;
  ifrCapota: string;
  flightNature: string;
  landingQuantity: number | null;
  cycleQuantity: number | null;
}

export const RegistryInformation = ({
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
  } = useForm<IBasicRegistryForm>({
    defaultValues: BASIC_REGISTRY_DEFAULT,
    mode: "all",
    resolver: yupResolver<IBasicRegistryForm>(BASIC_REGISTRY_SCHEMA),
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  // Modal context:
  const { toggleModal } = useModalContext();

  function submitCallback(e: IBasicRegistryForm) {
    onSubmit(e);
    toggleModal();
  }

  return (
    <S.Form key="registry" onSubmit={handleSubmit(submitCallback)}>
      <div className="modal-title-area">
        <p className="title">Informações do registro</p>
        <p className="subtitle">{mask("registration", registration)}</p>
      </div>
      <TextField
        {...register("engineStartUp")}
        variant="outlined"
        size="small"
        label="Partida"
        type="time"
        InputLabelProps={{ shrink: true }}
        fullWidth
        error={!!errors.engineStartUp}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("takeOffHour")}
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        label="Decolagem"
        size="small"
        type="time"
        fullWidth
        error={!!errors.takeOffHour}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("landingHour")}
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        label="Pouso"
        type="time"
        size="small"
        fullWidth
        error={!!errors.landingHour}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("engineCut")}
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        label="Corte"
        type="time"
        size="small"
        fullWidth
        error={!!errors.engineCut}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("dayTime")}
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        label="Diurno"
        type="time"
        size="small"
        fullWidth
        error={!!errors.dayTime}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("nightly")}
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        label="Noturno"
        type="time"
        size="small"
        fullWidth
        error={!!errors.nightly}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("ifr")}
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        label="IFR"
        type="time"
        size="small"
        fullWidth
        error={!!errors.ifr}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("ifrCapota")}
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        label="IFR Capota"
        type="time"
        size="small"
        fullWidth
        error={!!errors.ifrCapota}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("flightNature")}
        variant="outlined"
        size="small"
        label="Natureza do voo"
        InputLabelProps={{ shrink: true }}
        fullWidth
        error={!!errors.flightNature}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("landingQuantity")}
        variant="outlined"
        size="small"
        label="Pousos"
        type="number"
        InputLabelProps={{ shrink: true }}
        fullWidth
        error={!!errors.landingQuantity}
        helperText={errors.root?.message}
      />
      <TextField
        {...register("cycleQuantity")}
        variant="outlined"
        size="small"
        label="Ciclos"
        type="number"
        InputLabelProps={{ shrink: true }}
        fullWidth
        error={!!errors.cycleQuantity}
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
  defaultValues: IBasicRegistryForm;
  onSubmit: (e: IBasicRegistryForm) => void;
};
