import { createRef, useEffect, useState } from "react";

export const useSwipeContent = <T>({
  swipeMode = "medium",
  slideAmount,
}: Props) => {
  //  Debug var:
  const DEBUG: boolean = false;

  //  Distance divider:
  function getDistanceDivider() {
    if (swipeMode === "smallest") return 8;
    if (swipeMode === "small") return 6;
    if (swipeMode === "medium") return 4;
    if (swipeMode === "large") return 2;
    return 0;
  }
  const distanceDivider: number = getDistanceDivider();

  //  Reference of the element being 'swiped' to obtain his inner width:
  const swipableRef = createRef<T>();

  //  swipeBegin is used to store the firt clientX value of a swipe.
  //  swipeEnd stores every movement inside a swipe event.
  const [swipeBegin, setSwipeBegin] = useState<number | null>(null);
  const [swipeEnd, setSwipeEnd] = useState<number | null>(null);

  //  swipeDistance stores the minimum distance to call a swipe
  //  swipeDir stores the direction of the swipe; R for right, L for left.
  const [swipeDistance, setSwipeDistance] = useState<number>(0);
  const [swipeDir, setSwipeDir] = useState<"R" | "L" | null>(null);

  //  Minimum swipe distance is equal half of the element width.
  useEffect(() => {
    if (swipableRef.current && swipableRef.current instanceof HTMLElement) {
      DEBUG &&
        console.log(
          `${Math.ceil(
            swipableRef.current.clientWidth / slideAmount / distanceDivider
          )}px`
        );
      setSwipeDistance(
        Math.ceil(
          swipableRef.current.clientWidth / slideAmount / distanceDivider
        )
      );
    }
  }, [swipableRef]);

  //  Store the first touch:
  function onTouchStart(e: React.TouchEvent<T>) {
    setSwipeBegin(e.targetTouches[0].clientX);
  }
  //  Store each new touch:
  function onTouchMove(e: React.TouchEvent<T>) {
    setSwipeEnd(e.targetTouches[0].clientX);
  }
  //  Calculate if the client swiped and tells his direction:
  function onTouchEnd() {
    if (!swipeBegin || !swipeEnd) return;
    const distance: number = swipeBegin - swipeEnd;
    const isLeftSwipe: boolean = Math.ceil(distance) > swipeDistance;
    const isRightSwipe: boolean = Math.ceil(distance) < -swipeDistance;

    if (isLeftSwipe || isRightSwipe) setSwipeDir(isLeftSwipe ? "L" : "R");
    else setSwipeDir(null);
  }

  //  After sending a swipe direction signal, sets it back to null:
  useEffect(() => {
    if (swipeDir !== null) {
      setSwipeDir(null);
      setSwipeBegin(null);
      setSwipeEnd(null);
    }
  }, [swipeDir]);

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    swipeDir,
    swipableRef,
  };
};

type Props = {
  swipeMode: "smallest" | "small" | "medium" | "large";
  slideAmount: number;
};
