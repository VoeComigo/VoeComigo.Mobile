import { mask } from "../../utils/mask";

type Props = {
  engineStartUp: string;
  engineCut: string;
  landingQuantity: number;
};

export function generateCardInfo({
  engineStartUp,
  engineCut,
  landingQuantity,
}: Props) {
  return [
    {
      title: "Partida",
      value: mask("time", engineStartUp),
    },
    {
      title: "Decolagem",
      value: "10:45Z",
    },
    {
      title: "Pouso",
      value: landingQuantity,
    },
    {
      title: "Corte",
      value: mask("time", engineCut),
    },
    {
      title: "Diurno",
      value: "04:00",
    },
    {
      title: "Noturno",
      value: "00:00",
    },
    {
      title: "IFR real",
      value: "00:00",
    },
    {
      title: "IFR capota",
      value: "00:00",
    },
    {
      title: "Natureza do voo",
      value: "PV-Privado",
    },
    {
      title: "Pousos",
      value: "02",
    },
    {
      title: "Ciclos",
      value: "00",
    },
  ];
}
