import { Params } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

export const animalsLoader = async () => {
  const response = await fetch("https://animals.azurewebsites.net/api/animals");
  const result: IAnimal = await response.json();

  localStorage.setItem("animals", JSON.stringify(result));

  return result;
};

interface IAnimalLoader {
  params: Params<string>;
}

export const animalLoader = async ({ params }: IAnimalLoader) => {
  const response = await fetch(
    "https://animals.azurewebsites.net/api/animals/" + params.id
  );
  const result = await response.json();

  return result;
};
