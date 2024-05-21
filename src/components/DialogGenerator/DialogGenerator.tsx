import * as S from "./DialogGenerator.styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LockIcon from "@mui/icons-material/Lock";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ReportOffIcon from "@mui/icons-material/ReportOff";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useNotificationContext } from "../../contexts";
import {
  getRealValue,
  numericValidation,
  parseCallbackData,
  useDynamicDialogFetching,
} from "./DialogGenerator.utils";
import { RemoveModal } from "../../hooks";
import { MaskProps, MaskedTextField } from "../MaskedTextField/MaskedTextField";
import { useModalContext } from "../../contexts/ModalContext/ModalContext";

export const DialogGenerator = ({
  template,
  requestStatus,
  disableFetch,
  requestStatusCallback,
  responseCallback,
}: DialogGeneratorProps) => {
  const navigate = useNavigate();

  // Notification context:
  const { createNotification } = useNotificationContext();

  // States:
  const [dialog, setDialog] = useState<IDialog>(template); // Dialog state:
  const [activeStep, setActiveStep] = useState<number>(0); // Actual dialog step:
  const [activeValueStep, setActiveValueStep] = useState<number>(0); // Inner steps of the dialog:
  const [text, setText] = useState<string>(""); //  TextField handler:

  //  Navigate back to the callback url:
  function navigateBack() {
    navigate(dialog.callbackUrl);
  }

  // Modal context:
  const { toggleModal, setModalContent } = useModalContext("normal");
  useEffect(() => {
    setModalContent(
      <RemoveModal
        labels={{
          title:
            "Quer mesmo voltar ao menu anterior? Todo o progresso será perdido.",
          primaryLabel: "Sim, vou cadastrar mais tarde",
          secondaryLabel: "Não, mudei de idéia",
        }}
        onPrimaryClick={navigateBack}
        onSecondaryClick={toggleModal}
      />
    );
  }, []);

  //  Handle update:
  function updateHandler() {
    responseCallback(parseCallbackData(dialog));
  }

  //  Dynamic data fetching area:
  //  Fetch data from micro services:
  const { fetchData, data, loading, error } = useDynamicDialogFetching();

  //  Check if the dependent field got value. It if does enable the button:
  const checkDependentValue = (dependant: string) => {
    return dialog.steps.some((element) =>
      element.options.some((item) => {
        if (item.name === dependant && item.isValid) {
          return true;
        }
        return false;
      })
    );
  };

  //  Gets the value of the parent field:
  const getDependentValue = (dependant: string) => {
    let value: string = "";
    dialog.steps.find((element) =>
      element.options.find((item) => {
        if (item.name === dependant && item.isValid) {
          value = item.value;
          return item;
        }
        return null;
      })
    );
    return value;
  };

  //  Generate select options based on the API response:
  function generateFetchedData(el: IDialogOption) {
    //  Data without params:
    if (
      el.dynamicData?.fetchCall &&
      !Boolean(el.dynamicData.fetchDependencyName) &&
      !el.fetchedCollection
    ) {
      return fetchData(el.dynamicData.fetchCall);
    }

    //  Data with params:
    if (
      el.dynamicData?.fetchCall &&
      Boolean(el.dynamicData.fetchDependencyName) &&
      !el.value
    ) {
      return fetchData(
        el.dynamicData.fetchCall,
        getDependentValue(el.dynamicData.fetchDependencyName || "")
      );
    }
  }
  // Data fetching useEffect:
  useEffect(() => {
    if (
      !loading &&
      !error &&
      data &&
      dialog.steps[activeStep].options[activeValueStep].dynamicData
    ) {
      const aux: IDialog = dialog;
      aux.steps[activeStep].options[activeValueStep].fetchedCollection = data;
      setDialog({ ...aux });
    }
  }, [loading, error, data]);

  // Handle dialog navigation:
  const handleSubmit = () => {
    //  Dialog object reference:
    const aux: IDialog = dialog;

    //  Element being updated reference:
    const el = aux.steps[activeStep].options[activeValueStep];

    //  No-text warning:
    if (getRealValue(text) === "")
      createNotification({
        type: "warn",
        title: "Campo não preenchido",
        text: "Todos os campos assinalados devem ser preenchidos",
      });

    //  Text above minimum validation:
    if (el.minLenght && getRealValue(text).length < el.minLenght)
      return createNotification({
        type: "warn",
        title: "Valor incorreto",
        text: `O campo ${el.title.toLowerCase()} deve possuir no mínimo ${
          el.minLenght
        } caracteres`,
      });

    // Select type and dynamic data test:
    if (text !== el.value) {
      //  Erase any dependent field value if the father value is changed:
      const aux: IDialog = dialog;
      aux.steps.forEach((values) =>
        values.options.forEach((item) => {
          if (
            item.dynamicData?.fetchDependencyName === el.name &&
            item.value &&
            item.isValid
          ) {
            item.value = "";
            item.isValid = false;
          }
        })
      );
    }

    //  Update option value inside dialog object:
    el.value = text;
    el.isValid = text.length === 0 ? false : true;

    // Next inner step area:
    // Go to next inner step:
    if (aux.steps[activeStep].options.length - 1 > activeValueStep) {
      //  Gets the next inner field that is invalid:
      const nextInnerStepIndex: number = aux.steps[
        activeStep
      ].options.findIndex((el) => !el.isValid);

      //  If we find some invalid inner step, goes to then and check if it needs to fetch dynamic data:
      if (nextInnerStepIndex >= 0) {
        setActiveValueStep(nextInnerStepIndex);

        //  Dynamic data fetching:
        if (aux.steps[activeStep].options[nextInnerStepIndex].hasDynamicData) {
          generateFetchedData(
            aux.steps[activeStep].options[nextInnerStepIndex]
          );
        }
      }
    }

    //  Next outer step area:
    // Check if all of the inner steps got a valid value:
    const hasInvalidValues: boolean = aux.steps[activeStep].options.some(
      (el) => !el.isValid
    );
    //  If it does, goes to the next step.
    //  If doens't invalidade the step.
    if (!hasInvalidValues) {
      aux.steps[activeStep].isValid = true;
      //  Go to the next main step and to the first inner step:
      if (aux.steps.length - 1 > activeStep) setActiveStep(activeStep + 1);
      setActiveValueStep(0);
    } else aux.steps[activeStep].isValid = false;

    // Set TextField to null:
    setText("");
    setDialog({ ...aux });

    //  DEBUG:
    //console.log(aux);
  };

  // Change the substep by clicking on the element:
  function changeInnerStepByClick(i: number) {
    setActiveValueStep(i);
    setText(dialog.steps[activeStep].options[i].value);
    generateFetchedData(dialog.steps[activeStep].options[i]);
  }

  //  Go back handler:
  function goBack() {
    if (activeStep - 1 < 0) return toggleModal();
    else {
      setActiveStep((el) => el - 1);
      setText(dialog.steps[activeStep - 1].options[0].value);
      return setActiveValueStep(0);
    }
  }

  // Go forward handler
  function goForward() {
    const hasInvalidValues: boolean = dialog.steps[activeStep].options.some(
      (el) => !el.isValid
    );
    if (hasInvalidValues)
      return createNotification({
        type: "info",
        title: "Campos não preenchidos",
        text: "Conclua o preenchimento dos campos antes de avançar para a próxima etapa!",
      });

    // Navigate to the next main step and to the first invalid inner step:
    if (dialog.steps.length - 1 > activeStep) {
      const innerStepIdx: number = dialog.steps[
        activeStep + 1
      ].options.findIndex((el) => !el.isValid);

      if (innerStepIdx >= 0) setActiveValueStep(innerStepIdx);
      setActiveStep(activeStep + 1);
    }
  }

  //  Check if the user finished the form:
  const isFormValid = useMemo(() => {
    return dialog.steps.every((el) => el.isValid);
  }, [dialog]);

  useEffect(() => {
    if (isFormValid) return updateHandler();
  }, [isFormValid]);

  return (
    <S.Container>
      <S.BlueArea>
        <div className="navigation-buttons">
          <button onClick={goBack}>
            <ArrowBackIosIcon />
          </button>
          <button onClick={goForward}>
            <ArrowForwardIosIcon />
          </button>
        </div>
        <div className="steps-area">
          <div className="step-dot-area">
            {dialog.steps.map((item, i) => (
              <S.StepDot
                key={`dots-${item.title}`}
                className={
                  i !== activeStep && !item.isValid ? "inactive" : undefined
                }
              >
                {item.isValid ? <CheckIcon /> : i + 1}
              </S.StepDot>
            ))}
          </div>
          <h1>{dialog.steps[activeStep].title.toUpperCase()}</h1>
        </div>
        <div className="button-options-area">
          {dialog.steps[activeStep].options.map((item, i) => (
            <S.OptionButtons
              className={item.isValid ? "valid" : undefined}
              key={`button-${item.name}`}
              disabled={
                item.dynamicData?.fetchDependencyName
                  ? !checkDependentValue(item.dynamicData?.fetchDependencyName)
                  : false
              }
              onClick={() => changeInnerStepByClick(i)}
            >
              {item.icon}
              {item.title}
              {item.isValid && (
                <span className="valid-icon">
                  <CheckCircleIcon />
                </span>
              )}
              {item.dynamicData?.fetchDependencyName &&
                !checkDependentValue(item.dynamicData?.fetchDependencyName) && (
                  <span className="locked-icon">
                    <LockIcon />
                  </span>
                )}
            </S.OptionButtons>
          ))}
        </div>
        <form className="input-area" id="create-aircraft-form">
          {dialog.steps[activeStep].options[activeValueStep].type ===
            "select" && (
            <Select
              className={loading ? "select-input hide" : "select-input"}
              label={dialog.steps[activeStep].options[activeValueStep].title}
              variant="outlined"
              size="small"
              value={text}
              onChange={(e) => setText(e.target.value)}
              inputProps={{
                maxLength:
                  dialog.steps[activeStep].options[activeValueStep].maxLenght,
              }}
            >
              {dialog.steps[activeStep].options[
                activeValueStep
              ].fetchedCollection?.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          )}

          {dialog.steps[activeStep].options[activeValueStep].type !==
            "select" &&
            !dialog.steps[activeStep].options[activeValueStep].inputMask && (
              <TextField
                className={loading ? "text-input hide" : "text-input"}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                label={dialog.steps[activeStep].options[activeValueStep].title}
                size="small"
                value={text}
                type={
                  dialog.steps[activeStep].options[activeValueStep].type ===
                  "number"
                    ? "text"
                    : dialog.steps[activeStep].options[activeValueStep].type
                }
                onChange={(e) =>
                  setText(
                    numericValidation(
                      e.target.value,
                      dialog.steps[activeStep].options[activeValueStep].type
                    )
                  )
                }
                inputProps={{
                  maxLength:
                    dialog.steps[activeStep].options[activeValueStep].maxLenght,
                }}
              />
            )}

          {dialog.steps[activeStep].options[activeValueStep].type !==
            "select" &&
            dialog.steps[activeStep].options[activeValueStep].inputMask && (
              <MaskedTextField
                className={loading ? "text-input hide" : "text-input"}
                mask={
                  dialog.steps[activeStep].options[activeValueStep].inputMask
                }
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                label={dialog.steps[activeStep].options[activeValueStep].title}
                size="small"
                value={text}
                type={
                  dialog.steps[activeStep].options[activeValueStep].type ===
                  "number"
                    ? "text"
                    : dialog.steps[activeStep].options[activeValueStep].type
                }
                onChange={(e) =>
                  setText(
                    numericValidation(
                      e.target.value,
                      dialog.steps[activeStep].options[activeValueStep].type
                    )
                  )
                }
                inputProps={{
                  maxLength:
                    dialog.steps[activeStep].options[activeValueStep].maxLenght,
                }}
              />
            )}

          <Button
            className={loading ? "primary hide" : "primary"}
            type="submit"
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            disableElevation
          >
            {`Confirmar ${dialog.steps[activeStep].options[activeValueStep].title}`}
          </Button>
          <div className={loading ? "loader" : "loader hide"} />
        </form>
      </S.BlueArea>

      <S.SuccessArea className={isFormValid && requestStatus ? "show" : "hide"}>
        <div>
          {requestStatus === "success" ? <TaskAltIcon /> : <ReportOffIcon />}
          <h1>
            {requestStatus === "success"
              ? dialog.successPhrase.toUpperCase()
              : dialog.errorPhrase.toUpperCase()}
          </h1>
        </div>
        <Button
          className={"white-button"}
          type="submit"
          disabled={disableFetch}
          variant="contained"
          onClick={() => {
            requestStatus === "success"
              ? navigate(dialog.callbackUrl)
              : requestStatusCallback(undefined);
          }}
          disableElevation
        >
          {requestStatus === "success" ? dialog.succesLabel : dialog.errorLabel}
        </Button>
      </S.SuccessArea>

      {/* Data fetching error handling: */}
      <S.SuccessArea className={error ? "show" : "hide"}>
        <div>
          <ReportOffIcon />
          <h1>OCORREU UM ERRO AO RECUPERAR AS INFORMAÇÕES</h1>
        </div>
        <Button
          className={"white-button"}
          type="submit"
          variant="contained"
          onClick={() => navigate(0)}
          disableElevation
        >
          {`Tentar novamente`}
        </Button>
      </S.SuccessArea>
    </S.Container>
  );
};

type DialogGeneratorProps = {
  template: IDialog;
  disableFetch: boolean;
  requestStatus: "success" | "error" | undefined;
  requestStatusCallback: (e: "success" | "error" | undefined) => void;
  responseCallback: (e: object) => void;
};

export interface IDialog {
  callbackUrl: string;
  successPhrase: string;
  succesLabel: string;
  errorPhrase: string;
  errorLabel: string;
  steps: {
    title: string;
    isValid: boolean;
    options: IDialogOption[];
  }[];
}

export interface IDialogOption {
  name: string;
  type: "text" | "number" | "date" | "select";
  maxLenght?: number;
  minLenght?: number;
  title: string;
  icon: JSX.Element;
  value: string;
  isValid: boolean;
  required: boolean;
  //  Mask controller:
  inputMask?: string | MaskProps[];
  // For select type:
  fetchedCollection?: {
    value: string;
    title: string;
  }[];
  //  Microservice fetching dynamic data:
  //  Important: all fetched data needs to be a Select component.
  hasDynamicData?: boolean;
  dynamicData?: IFetchData;
  //  Parsing option:
  removeMaskOnParse?: boolean;
}

export interface IFetchData {
  fetchDependencyName?: string | null;
  fetchCall?: (e?: string) => Promise<any>;
}
