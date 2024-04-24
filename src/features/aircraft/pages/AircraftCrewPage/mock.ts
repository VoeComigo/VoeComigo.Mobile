import { IAircraftCrew } from "./AircraftCrewPage.utils";

export const crewMock: IAircraftCrew = {
  id: "1",
  registry: "PR-XXX",
  isOwner: true,
  crew: [
    {
      id: "1",
      name: "Lucas Abreu",
      role: "Comandante",
      email: "elimahgbfq@gmail.com",
      codeANAC: "123456",
      phone: "31996000174",
      photo:
        "https://media.licdn.com/dms/image/D4D03AQEnaeeT9vP8Ug/profile-displayphoto-shrink_800_800/0/1709084647500?e=1717632000&v=beta&t=C7gbkje5tStDDjfxU4vBOW19jgdTGC-vG1Dlf9SuJ6A",
    },
    {
      id: "2",
      name: "Pedro Silva",
      role: "Piloto",
      email: "pepe@abc.com.br",
      phone: "31991280931",
      codeANAC: "665878",
      photo:
        "https://media.licdn.com/dms/image/C4E03AQHbi9ZApseNlA/profile-displayphoto-shrink_800_800/0/1636951283815?e=1717632000&v=beta&t=ePuC7dcJfrgVzliGpUbtB6Efp6FKZVNtBf-pDKJcYOo",
    },
    {
      id: "3",
      name: "Luiz Eduardo",
      role: "Co-piloto",
      email: "luizeasilva@pau.com.br",
      codeANAC: "292006",
      photo:
        "https://media.licdn.com/dms/image/C5603AQEL-EGFHKkiRw/profile-displayphoto-shrink_800_800/0/1613699505905?e=1717632000&v=beta&t=CxUbHBU7LDaOuvHPPc_L9ZAb4E64yrHmz44twrwWro4",
    },
    {
      id: "4",
      name: "Dori Edson",
      role: "Aeromoça",
      email: "dori.edson@aeroservice.com",
      codeANAC: "457877",
    },
  ],
};
