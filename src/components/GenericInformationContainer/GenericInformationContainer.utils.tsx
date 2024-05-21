type InfoMapper = {
  title: string;
  value: string | number;
};

export const useGenerateInformationSlides = (
  data: InfoMapper[],
  breakAt: number
) => {
  let slidesArray: InfoMapper[][] = [];
  let auxArray: InfoMapper[] = [];

  data.forEach((el, i) => {
    auxArray.push(el);
    if (auxArray.length === breakAt || i + 1 === data.length) {
      slidesArray.push(auxArray);
      auxArray = [];
    }
  });

  return { slidesArray };
};
