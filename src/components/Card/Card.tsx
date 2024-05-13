import { ReactNode } from "react";
import * as S from "./Card.styles";
import React from "react";

export const Card = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children } = props;

  return (
    <S.Card className={className} ref={ref}>
      {children}
    </S.Card>
  );
});

type Props = {
  className?: string;
  children?: ReactNode;
};
