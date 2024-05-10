import { ReactElement, ReactNode } from "react";
import * as S from "./Card.styles";

export const Card = ({ className, children }: Props) => {
  return <S.Card className={className}>{children}</S.Card>;
};

type Props = {
  className?: string;
  children?: ReactNode;
};
