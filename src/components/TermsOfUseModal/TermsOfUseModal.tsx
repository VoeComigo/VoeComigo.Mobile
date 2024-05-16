import { Button, Checkbox, TextField } from "@mui/material";
import { TermOfUse } from "./TermOfUse";
import * as S from "./TermsOfUseModal.styles";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  DEFAULT_VALUES,
  ITermsForm,
  VALIDATE_TERMS_SCHEMA,
} from "./TermsOfUseModal.validation";
import { useAcceptOpeningTerm } from "../../features/dashboard/hooks/useAcceptOpeningTerm";
import { useNotificationContext } from "../../contexts";

export const TermsStepOne = ({
  username,
  registration,
  onAcceptTerm,
}: Omit<
  Props,
  "aircraftID" | "termPhase" | "onPhaseChange" | "refetch" | "closeModal"
>) => {
  return (
    <>
      <div className="title-area">
        <p className="fs16 purple">Condições de uso</p>
        <p className="fs28 purple bold">Diário de bordo digital</p>
      </div>
      <div className="term-of-use-container">
        <TermOfUse
          className="term-text"
          username={username}
          registration={registration}
        />
      </div>
      <div className="bottom-area">
        <Checkbox
          size="medium"
          onChange={(e) => onAcceptTerm(e.target.checked)}
        />
        <p className="fs14 purple">Li e concordo com os termos de uso</p>
      </div>
    </>
  );
};

export const TermsStepTwo = ({
  aircraftID,
  refetch,
  closeModal,
}: Omit<
  Props,
  "username" | "registration" | "termPhase" | "onPhaseChange" | "onAcceptTerm"
>) => {
  //  UseForm:
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITermsForm>({
    mode: "all",
    resolver: yupResolver<ITermsForm>(VALIDATE_TERMS_SCHEMA),
    defaultValues: DEFAULT_VALUES,
  });

  //  Fetch request:
  const { acceptOpeningTerm, loading } = useAcceptOpeningTerm();

  //  Notification:
  const { createNotification } = useNotificationContext();

  async function onSubmit(e: ITermsForm) {
    try {
      await acceptOpeningTerm([{ aircraftID: aircraftID || "" }], e);
      createNotification({
        type: "success",
        title: "Termos de abertura",
        text: "Termos de abertura aceitos com sucesso! Agora você pode usar o diário de bordo digital.",
      });
      refetch();
      return closeModal();
    } catch {
      createNotification({
        type: "error",
        title: "Termos de abertura",
        text: "Ocorreu um erro ao aceitar o termos de abertura, tente novamente mais tarde.",
      });
    }
  }

  return (
    <>
      <div className="title-area">
        <p className="fs16 purple">Termo de abertura</p>
        <p className="fs28 purple bold">Diário de bordo digital</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-area">
          <TextField
            {...register("identifier")}
            variant="outlined"
            label="Identificador do diário"
            size="small"
            error={!!errors.identifier}
            helperText={errors.identifier?.message}
          />
          <TextField
            {...register("totalHours")}
            variant="outlined"
            label="Horas totais"
            size="small"
            type="number"
            inputProps={{ step: "any" }}
            error={!!errors.totalHours}
            helperText={errors.totalHours?.message}
          />
          <TextField
            {...register("totalCycles")}
            variant="outlined"
            label="Ciclos totais"
            size="small"
            type="number"
            error={!!errors.totalCycles}
            helperText={errors.totalCycles?.message}
          />
          <TextField
            {...register("landingQuantity")}
            variant="outlined"
            label="Quantidade de pousos"
            size="small"
            type="number"
            error={!!errors.landingQuantity}
            helperText={errors.landingQuantity?.message}
          />
        </div>
        <div className="bottom-area">
          <Button
            className="primary"
            type="submit"
            variant="contained"
            disabled={loading}
            disableElevation
          >
            ENVIAR INFORMAÇÕES
          </Button>
        </div>
      </form>
    </>
  );
};

export const TermsOfUseModal = ({
  aircraftID,
  username,
  registration,
  termPhase,
  onPhaseChange,
  refetch,
  closeModal,
}: Omit<Props, "onAcceptTerm">) => {
  const [phase, setPhase] = useState<"one" | "two">(termPhase);

  useEffect(() => {
    setPhase(termPhase);
  }, [termPhase]);

  function changePhase(e: boolean) {
    setPhase(e ? "two" : "one");
    onPhaseChange(e ? "two" : "one");
  }
  return (
    <S.Wrapper>
      {phase === "one" && (
        <TermsStepOne
          username={username}
          registration={registration}
          onAcceptTerm={changePhase}
        />
      )}
      {phase === "two" && (
        <TermsStepTwo
          aircraftID={aircraftID}
          refetch={refetch}
          closeModal={closeModal}
        />
      )}
    </S.Wrapper>
  );
};

type Props = {
  aircraftID?: string;
  termPhase: "one" | "two";
  onPhaseChange: (phase: "one" | "two") => void;
  refetch: () => void;
  closeModal: () => void;
  //  Phase one props:
  username: string;
  registration: string;
  onAcceptTerm: (e: boolean) => void;
};
