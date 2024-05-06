export const useDoubleTap = ({ onDoubleTap }: Props) => {
  const tapDelay: number = 500; //  Delay between each tap
  let clickTimer: NodeJS.Timeout | null = null;

  function onTap() {
    //  First tap:
    if (clickTimer == null) {
      clickTimer = setTimeout(() => {
        clickTimer = null;
      }, tapDelay);
    }
    //  Second tap:
    else {
      onDoubleTap();
      clearTimeout(clickTimer);
      clickTimer = null;
    }
  }

  return { onTap };
};

type Props = {
  onDoubleTap: () => void;
};
