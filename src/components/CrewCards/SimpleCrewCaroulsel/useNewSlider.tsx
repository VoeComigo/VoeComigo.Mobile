/*
  This JS is from the following project:
  https://github.com/bushblade/Full-Screen-Touch-Slider
*/

import React, { useEffect, useState } from "react";
import { createRef, useRef } from "react";

type ISliderProps = {
  slidesAmount?: number;
};

export const useSliderV2 = ({ slidesAmount }: ISliderProps) => {
  // Main component refs:
  const carouselRef = createRef<HTMLDivElement>();
  const slidesRef: React.MutableRefObject<HTMLDivElement | null>[] = [];

  const [activeSlide, setActiveSlide] = useState<number>(0);

  //    Prepare the refs array to use in the slider:
  Array.from(Array(slidesAmount).keys()).forEach(() => {
    const slide = useRef<HTMLDivElement>(null);
    slidesRef.push(slide);
  });

  let isDragging: boolean = false;
  let startPos: number = 0;
  let currentIndex: number = 0;
  let currentTranslate: number = 0;
  let prevTranslate: number = 0;
  let animationID: number = 0;

  slidesRef.forEach((slide, i) => {
    if (slide.current) {
      // Touch events
      slide.current.ontouchstart = touchStart(i);
      slide.current.ontouchend = touchEnd;
      slide.current.ontouchmove = touchMove;

      // Mouse events
      slide.current.onmousedown = touchStart(i);
      slide.current.onmouseup = touchEnd;
      slide.current.onmouseleave = touchEnd;
      slide.current.onmousemove = touchMove;
    }
  });

  function touchStart(i: number) {
    return function (ev: MouseEvent | TouchEvent) {
      currentIndex = i;
      startPos = getPositionX(ev);
      isDragging = true;

      // https://css-tricks.com/using-requestanimationframe/
      animationID = requestAnimationFrame(animation);
    };
  }

  function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);

    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentIndex < slidesRef.length - 1)
      currentIndex += 1;

    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

    setPositionByIndex(currentIndex);
  }

  function touchMove(ev: MouseEvent | TouchEvent) {
    if (isDragging) {
      const currentPosition = getPositionX(ev);
      currentTranslate = prevTranslate + currentPosition - startPos;
    }
  }

  function getPositionX(ev: any) {
    return ev.type.includes("mouse") ? ev.pageX : ev.touches[0].clientX;
  }

  //  Animation handler:
  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  }

  //  Slides position handler:
  function setSliderPosition() {
    if (carouselRef.current)
      carouselRef.current.style.transform = `translateX(${currentTranslate}px)`;
  }

  function setPositionByIndex(idx: number) {
    currentTranslate = idx * -window.innerWidth + (idx > 0 ? 32 * idx : 0);
    prevTranslate = currentTranslate;
    setSliderPosition();
  }

  //  SLIDER DOT HANDLING AREA:
  function onClickSliderDot(e: number) {
    currentIndex = e;
    setActiveSlide(e);
    setPositionByIndex(e);
  }

  return {
    carouselRef,
    slidesRef,
    sliderController: {
      activeSlide,
      amount: slidesAmount || 0,
      onClick: onClickSliderDot,
    },
  };
};
