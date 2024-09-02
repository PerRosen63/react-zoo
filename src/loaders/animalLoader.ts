import { Params } from "react-router-dom";
import { getAnimal, getAnimals } from "../services/animalService";

export const animalsLoader = async () => {
  return await getAnimals();
};

interface IAnimalLoader {
  params: Params<string>;
}

export const animalLoader = async ({ params }: IAnimalLoader) => {
  return await getAnimal(params.id!);
};
