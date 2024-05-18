import * as S from "./Modal.styles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export const Modal = ({
  className,
  contentStyle = "normal",
  children,
  isOpen = false,
  openCallback,
  hasCloseButton = true,
}: Props) => {
  return (
    <S.Background className={isOpen ? "show" : undefined}>
      {contentStyle !== "bottom" && (
        <S.Content $contentStyle={contentStyle} className={className}>
          {hasCloseButton && (
            <div className="close-region">
              <button
                className="close-button"
                onClick={() => openCallback(!isOpen)}
              >
                <CloseOutlinedIcon />
              </button>
            </div>
          )}
          {children}
        </S.Content>
      )}
      {contentStyle === "bottom" && (
        <S.BottomModalContent className={className}>
          {hasCloseButton && (
            <div className="close-region">
              <button
                className="close-button"
                onClick={() => openCallback(!isOpen)}
              >
                <CloseOutlinedIcon />
              </button>
            </div>
          )}
          {children}
        </S.BottomModalContent>
      )}
    </S.Background>
  );
};

type Props = {
  className?: string;
  contentStyle?: "normal" | "ticket" | "bottom";
  children: JSX.Element;
  isOpen: boolean;
  openCallback: (e: boolean) => void;
  hasCloseButton?: boolean;
};
