import { ISelectOptionsFromAPI } from "./types";

const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export async function getManufactor(): Promise<ISelectOptionsFromAPI[]> {
  return new Promise(async (resolve) => {
    const response = await fetch(`${API_BASE_URL}/api/Manufacturer/Airframe`, {
      method: "GET",
    });
    resolve(response.json());
  });
}
