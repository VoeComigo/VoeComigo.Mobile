export const getOnboardFunction = (name: string) => {
  if (name === "P1") return "P1 - Piloto em comando";
  if (name === "I1") return "I1 - Piloto em instrução";
  if (name === "I2") return "I2 - Piloto em instrução para comando";
  if (name === "O1") return "O1 - Segundo em comando | Single pilot";
  if (name === "O2") return "O2 - Segundo em comando | Questão regulamentar";
  if (name === "O3") return "O3 - Segundo em comando | Dual pilot";
  if (name === "V1") return "V1 - Instrutor de voo";
  if (name === "V2") return "V2 - Instrutor de voo em solo";
  if (name === "V3") return "V3 - Instrutor de voo observador";
  if (name === "C") return "C - Comissário";
  if (name === "M") return "M - Mecânico de voo";
  if (name === "X") return "X - Tripulante extra";
  if (name === "D") return "D - Outro";
  return "";
};

export const getFlightNature = (name: string) => {
  if (name === "AE") return "AE - Autorização especial";
  if (name === "CQ") return "CQ - Exame prático de proficiência";
  if (name === "EX") return "EX - Experiência";
  if (name === "NR") return "NR - Voo não regular";
  if (name === "RE") return "RE - Voo regular";
  if (name === "PV") return "PV - Caráter privado";
  if (name === "SA") return "SA - Serviço aéreo especializado";
  if (name === "TN") return "TN - Treinamento";
  if (name === "TR") return "TR - Traslado da aeronave";
  return "";
};
