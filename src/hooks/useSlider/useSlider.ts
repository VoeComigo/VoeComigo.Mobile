import { useEffect, useRef, useState } from "react";

export const useSlider = ({
  elementClassname,
  slideAmount,
  sliderType = "infinite",
}: Props) => {
  const elementFullWidth: number = 100 * slideAmount; // Full width in % of the container
  const itemWidth = useRef<number>(0); // Width in px of each item
  const [offsetX, setOffsetX] = useState<number>(0); // TranslateX offset
  const [slideNum, setSlideNum] = useState<number>(0); // Actual slide index

  // Getting item width in px:
  useEffect(() => {
    const wd: Element = document.getElementsByClassName(elementClassname)[0];
    itemWidth.current = Math.ceil(wd.clientWidth / slideAmount);
  }, []);

  // Calculate the slide change based on the swipe direction and slider type:
  function triggerSlider(dir: "L" | "R" | null) {
    let newIndex: number = slideNum;

    if (sliderType === "infinite") {
      if (dir === "L")
        newIndex = newIndex + 1 > slideAmount - 1 ? 0 : newIndex + 1;
      else if (dir === "R")
        newIndex = newIndex - 1 < 0 ? slideAmount - 1 : newIndex - 1;
    } else {
      if (dir === "L")
        newIndex =
          newIndex + 1 > slideAmount - 1 ? slideAmount - 1 : newIndex + 1;
      else if (dir === "R") newIndex = newIndex - 1 < 0 ? 0 : newIndex - 1;
    }

    setSlideNum(newIndex);

    if (sliderType === "infinite")
      return setOffsetX(itemWidth.current * -newIndex);
    else return staticSlideAnimationHandler(dir, newIndex);
  }

  //  If the slider is static, preform a little animation when you reach the max and min slide amount:
  function staticSlideAnimationHandler(dir: "L" | "R" | null, index: number) {
    //  Configs:
    const offsetThreshold: number = 20; // Offset for the animation in px
    const delay: number = 100; // Animation delay in ms

    if (dir === "R" && index === 0) {
      setOffsetX(offsetThreshold);
      const time = setTimeout(() => {
        setOffsetX(0);
        clearTimeout(time);
      }, delay);
      return;
    } else if (dir === "L" && index === slideAmount - 1) {
      setOffsetX(itemWidth.current * -index - offsetThreshold);
      const time = setTimeout(() => {
        setOffsetX(itemWidth.current * -index);
        clearTimeout(time);
      }, delay);
      return;
    } else if (index !== 0 && index !== slideAmount - 1)
      return setOffsetX(itemWidth.current * -index);
  }

  //  Callback for the SliderDot component controller:
  function sliderDotCallback(e: number) {
    setSlideNum(e);
    setOffsetX(itemWidth.current * -e);
  }

  function onMovement(e: React.TouchEvent<HTMLElement>) {
    const aux = (e.targetTouches[0].clientX * 100) / itemWidth.current;
    const percent = (itemWidth.current * aux) / 100;
    console.log("Pixel clamp: ", aux + "%");

    setOffsetX((el) => el + percent);
  }

  return {
    offsetX,
    elementFullWidth,
    triggerSlider,
    onMovement,
    sliderDotController: {
      amount: slideAmount,
      highlighted: slideNum,
      onClick: sliderDotCallback,
    },
  };
};

type Props = {
  elementClassname: string;
  slideAmount: number;
  sliderType?: "infinite" | "static";
};
