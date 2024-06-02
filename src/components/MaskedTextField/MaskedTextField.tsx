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
  placeholderchar?: string;
}

const TextMaskCustom = forwardRef<
  HTMLInputElement,
  Omit<InputBaseComponentProps, "onChange"> & ICustomMaskedInputProps
>(function TextMaskCustom(props, ref) {
  const { onChange, mask, placeholderchar, ...other } = props;
  const placeholder: string = placeholderchar ? placeholderchar : "_";

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

export const MaskedTextField = forwardRef<
  HTMLInputElement,
  TextFieldProps & MaskProps
>((props, ref) => {
  const { mask, placeholderchar } = props;
  return (
    <TextField
      inputRef={ref}
      {...props}
      InputProps={{
        inputComponent: TextMaskCustom as any,
      }}
      inputProps={{
        mask,
        placeholderchar,
      }}
    />
  );
});

export type MaskProps = {
  mask?: string | MaskProps[];
  placeholderchar?: string;
};
