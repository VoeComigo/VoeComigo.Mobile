import * as S from "./Notification.styles";
import {
  CheckCircleOutlineOutlined as SuccessIcon,
  CancelOutlined as CancelIcon,
  ReportOutlined as WarnIcon,
  InfoOutlined as InfoIcon,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

//  Constant that defines the medium time that a user needs to read a char.
const charReadTime: number = 60; // In ms

export const Notification = ({
  id,
  type,
  title,
  text,
  removeNotification,
}: NotificationProps) => {
  //  Set ID:

  //    Switch the icon based on the notification type:
  const IconSwitcher = ({ type }: TypeProps) => {
    if (type === "success") return <SuccessIcon className="icon" />;
    if (type === "error") return <CancelIcon className="icon" />;
    if (type === "info") return <InfoIcon className="icon" />;
    if (type === "warn") return <WarnIcon className="icon" />;
    return <></>;
  };

  //    Calculate the notification decay time based on the text lenght and medium read time:
  function calculateDecayTime() {
    const titleLen: number = !!title ? title.length : 0;
    const textLen: number = !!text ? text.length : 0;
    //  DEBUG:
    /* console.log(
      `Evaluated text read time: ${(titleLen + textLen) * charReadTime}/ms`
    ); */
    return (titleLen + textLen) * charReadTime;
  }

  //    Notification handling status:
  const [toggle, setToggle] = useState<"hide" | "show">("hide");

  //    Trigger the notification animation and fullfilled time:
  useEffect(() => {
    setToggle("show");
    setTimeout(() => {
      setToggle("hide");
      removeNotification && removeNotification(id!);
    }, calculateDecayTime());
  }, []);

  return (
    <S.Container type={type} className={toggle}>
      <S.ColorStripe type={type} />
      <IconSwitcher type={type} />
      <div className="text-area">
        <p className="title">{title}</p>
        <p className="text">{text}</p>
      </div>
    </S.Container>
  );
};

export type NotificationProps = {
  id?: string;
  type: "error" | "info" | "warn" | "success";
  title?: string;
  text?: string;
  removeNotification?: (id: string) => void;
};

type TypeProps = {
  type: "error" | "info" | "warn" | "success";
};
