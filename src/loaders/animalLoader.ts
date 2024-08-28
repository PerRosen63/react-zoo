import { IAnimal } from "../models/IAnimal";

export const animalsLoader = async () => {
  const response = await fetch("https://animals.azurewebsites.net/api/animals");
  const result: IAnimal = await response.json();

  return result;
};
