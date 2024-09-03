import { IAnimal } from "../models/IAnimal";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

export const getAnimals = async () => {
  const cachedAnimalsString = localStorage.getItem("animals");

  if (cachedAnimalsString) {
    return JSON.parse(cachedAnimalsString);
  } else {
    const response = await fetch(BASE_URL);
    const result: IAnimal[] = await response.json();

    localStorage.setItem("animals", JSON.stringify(result));

    return result;
  }
};

export const getAnimal = async (id: string) => {
  const cachedAnimalsString = localStorage.getItem("animals");

  if (cachedAnimalsString) {
    const cachedAnimals: IAnimal[] = JSON.parse(cachedAnimalsString);

    const animalId = id ? parseInt(id, 10) : undefined;

    if (animalId !== undefined) {
      const animal = cachedAnimals.find((animal) => animal.id === animalId);

      if (animal) {
        return animal;
      } else {
        console.error("Animal not found in cache:", id);
        throw new Error("Animal not found");
      }
    }
  } else {
    console.error("No animals found in cache.");
    const response = await fetch(`${BASE_URL}/${id}`);
    const result: IAnimal = await response.json();
    return result;
  }
};
