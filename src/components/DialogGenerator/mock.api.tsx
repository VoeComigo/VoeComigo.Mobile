export type Manufacturers = {
  id: string;
  name: string;
};

export async function getManufactor(): Promise<Manufacturers[]> {
  const dataObj: Manufacturers[] = [
    {
      id: "1",
      name: "Boeing",
    },
    {
      id: "2",
      name: "Airbus",
    },
    {
      id: "3",
      name: "Embraer",
    },
    {
      id: "4",
      name: "Cessna",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataObj);
    }, 1000);
  });
}

export async function getModel(modelID?: string): Promise<Manufacturers[]> {
  const dataObj = {
    "1": [
      {
        id: "1",
        name: "Boeing 737",
      },
      {
        id: "2",
        name: "Boeing 767",
      },
      {
        id: "3",
        name: "Boeing 787",
      },
    ] as Manufacturers[],
    "2": [
      {
        id: "1",
        name: "Airbus A330",
      },
      {
        id: "2",
        name: "Airbus A350",
      },
      {
        id: "3",
        name: "Airbus A380",
      },
    ] as Manufacturers[],
    "3": [
      {
        id: "1",
        name: "E-jet E175",
      },
      {
        id: "2",
        name: "E-jet E190",
      },
      {
        id: "3",
        name: "E-jet E195",
      },
    ] as Manufacturers[],
    "4": [
      {
        id: "1",
        name: "Cessna 150",
      },
      {
        id: "2",
        name: "Cessna 172",
      },
      {
        id: "3",
        name: "Cessna 182",
      },
    ] as Manufacturers[],
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataObj[modelID as keyof typeof dataObj]);
    }, 1000);
  });
}
