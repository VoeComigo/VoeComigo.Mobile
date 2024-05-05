import { forwardRef } from "react";
import {
  InputBaseComponentProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { IMaskInput } from "react-imask";

interface ICustomMaskedInputProps {
  mask: string;
  onChange: (event: { target: { value: string } }) => void;
}

const TextMaskCustom = forwardRef<
  HTMLInputElement,
  Omit<InputBaseComponentProps, "onChange"> & ICustomMaskedInputProps
>(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      inputRef={ref}
      mask={props.mask}
      unmask={true}
      onAccept={(value: any) => onChange({ target: { value } })}
      lazy={false}
      placeholderChar="_"
      type="text"
      style={{ padding: "8.5px 14px" }}
    />
  );
});

export const MaskedTextField = (props: TextFieldProps & MaskProps) => {
  return (
    <TextField
      {...props}
      InputProps={{
        inputComponent: TextMaskCustom as any,
      }}
      inputProps={{ mask: props.mask }}
    />
  );
};

export type MaskProps = {
  mask?: string | MaskProps[];
};
