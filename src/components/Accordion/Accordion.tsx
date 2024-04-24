import * as S from "./Accordion.styles";
import { ReactElement, useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export const Accordion = ({
  className,
  title,
  children,
  isOpen = false,
}: Props) => {
  const [open, setOpen] = useState<boolean>(isOpen);

  return (
    <S.Card className={className} $isOpen={open}>
      <button className="accordion-header" onClick={() => setOpen(!open)}>
        {title}
        <KeyboardArrowDownOutlinedIcon className="arrow-icon" />
      </button>
      <div className={`${open ? "open" : "closed"}`}>{children}</div>
    </S.Card>
  );
};

type Props = {
  className?: string;
  isOpen?: boolean;
  title: string;
  children?: ReactElement;
};
