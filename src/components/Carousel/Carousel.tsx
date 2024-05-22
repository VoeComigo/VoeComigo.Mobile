import { ReactNode } from "react";
import "./slick-theme.css";
import "./slick.css";
import Slider, { Settings } from "react-slick";

export const Carousel = ({
  className,
  children,
  slidesAmount,
  hasNavigationDots = true,
  hasInfiniteScrolling = true,
  stopSwiping = false,
  onChange,
}: Props) => {
  var carouselSettings: Settings = {
    dots: hasNavigationDots,
    infinite: slidesAmount > 1 && hasInfiniteScrolling ? true : false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    swipe: !stopSwiping,
    beforeChange: (_, i) => onChange && onChange(i),
  };

  return (
    <Slider className={className} {...carouselSettings}>
      {children}
    </Slider>
  );
};

type Props = {
  className?: string;
  slidesAmount: number;
  children?: ReactNode;
  hasNavigationDots?: boolean;
  hasInfiniteScrolling?: boolean;
  stopSwiping?: boolean;
  onChange?: (e: number) => void;
};
