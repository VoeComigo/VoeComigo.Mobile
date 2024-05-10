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
  placeholderChar?: string;
}

const TextMaskCustom = forwardRef<
  HTMLInputElement,
  Omit<InputBaseComponentProps, "onChange"> & ICustomMaskedInputProps
>(function TextMaskCustom(props, ref) {
  const { onChange, mask, placeholderChar, ...other } = props;
  const placeholder: string = placeholderChar ? placeholderChar : "_";

  return (
    <IMaskInput
      {...other}
      type="text"
      inputRef={ref}
      mask={mask}
      unmask={true}
      lazy={false}
      placeholderChar={placeholder}
      style={{ padding: "8.5px 14px" }}
      onAccept={(value: any) => onChange({ target: { value } })}
    />
  );
});

export const MaskedTextField = (props: TextFieldProps & MaskProps) => {
  const { mask, placeholderChar } = props;
  return (
    <TextField
      {...props}
      InputProps={{
        inputComponent: TextMaskCustom as any,
      }}
      inputProps={{
        mask,
        placeholderChar,
      }}
    />
  );
};

export type MaskProps = {
  mask?: string | MaskProps[];
  placeholderChar?: string;
};
