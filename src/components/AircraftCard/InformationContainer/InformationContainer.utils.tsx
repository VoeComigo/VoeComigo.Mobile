import { mask } from "../../../utils/mask";
import { AircraftInfoProps } from "./InformationContainer";

type InfoMapper = {
  title: string;
  value: string;
  subValue?: string;
};

export const useGenerateInformationSlides = (data: AircraftInfoProps) => {
  //  First slide generator:
  const firstSlide: InfoMapper[] = [
    {
      title: "Proprietário:",
      value: data.owner.name,
      subValue:
        data.owner.cpfCnpj.length <= 11
          ? mask("cpf", data.owner.cpfCnpj)
          : mask("cnpj", data.owner.cpfCnpj),
    },
    {
      title: "Operador:",
      value: data.operator.name,
      subValue:
        data.operator.cpfCnpj.length <= 11
          ? mask("cpf", data.operator.cpfCnpj)
          : mask("cnpj", data.operator.cpfCnpj),
    },
  ];
  //  Second slide generator:
  const secondSlide: InfoMapper[] = [
    {
      title: "Fabricante:",
      value: data.model.manufacturer.description,
    },
    {
      title: "Modelo:",
      value: data.model.description,
    },
    {
      title: "Ano de fabricação:",
      value: data.manufacturingYear,
    },
    {
      title: "Nº de série:",
      value: data.serieNumber,
    },
  ];
  //  Third slide generator:
  const thirdSlide: InfoMapper[] = [
    {
      title: "Hab. Requerida:",
      value: data.model.requiredLicense,
    },
    {
      title: "Tipo de voo autorizado:",
      value: data.flightType,
    },
    {
      title: "Categoria de registro:",
      value: data.registrationCategory,
    },
  ];
  //  Fourth slide generator:
  const fourthSlide: InfoMapper[] = [
    {
      title: "Nº de passageiros:",
      value: data.passengerAmount.toString(),
    },
    {
      title: "Nº de assento:",
      value: data.seatsAmount.toString(),
    },
    {
      title: "Tripulação mínima prevista:",
      value: data.maxCrewMembers.toString(),
    },
  ];

  const slidesArray: InfoMapper[][] = [
    firstSlide,
    secondSlide,
    thirdSlide,
    fourthSlide,
  ];
  return { slidesArray };
};
