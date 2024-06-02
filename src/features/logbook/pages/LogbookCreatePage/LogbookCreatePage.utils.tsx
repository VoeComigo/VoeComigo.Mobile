import { IBasicInfoForm } from "./Form/BasicInformation";
import { IBasicRegistryForm } from "./Form/RegistryInformation";

export function getItemsAmount(data?: IBasicInfoForm | IBasicRegistryForm) {
  if (data) return Object.keys(data).length;
  return 0;
}

export function getFilledAmount(data?: IBasicInfoForm | IBasicRegistryForm) {
  let amount = 0;
  if (data) {
    Object.values(data).forEach((value) => {
      if (value) amount++;
    });
  }
  return amount;
}
