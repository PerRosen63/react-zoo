import { Params } from "react-router-dom";
import { getAnimal, getAnimals } from "../services/animalService";

export const animalsLoader = async () => {
  return await getAnimals();

  /* const cachedAnimals = localStorage.getItem("animals");

  if (cachedAnimals) {
    return JSON.parse(cachedAnimals);
  } else {
    const response = await fetch(
      "https://animals.azurewebsites.net/api/animals"
    );
    const result: IAnimal = await response.json();

    localStorage.setItem("animals", JSON.stringify(result));

    return result;
  } */
};

interface IAnimalLoader {
  params: Params<string>;
}

export const animalLoader = async ({ params }: IAnimalLoader) => {
  return await getAnimal(params.id!);

  /* const cachedAnimalsString = localStorage.getItem("animals");

  if (cachedAnimalsString) {
    const cachedAnimals: IAnimal[] = JSON.parse(cachedAnimalsString);

    const animalId = params.id ? parseInt(params.id, 10) : undefined;

    if (animalId !== undefined) {
      const animal = cachedAnimals.find((animal) => animal.id === animalId);

      if (animal) {
        return animal;
      } else {
        console.error("Animal not found in cache:", params.id);
        throw new Error("Animal not found");
      }
    }
  } else {
    console.error("No animals found in cache.");
    const response = await fetch(
      "https://animals.azurewebsites.net/api/animals"
    );
    const result: IAnimal = await response.json();
    return result;
  } */
};
