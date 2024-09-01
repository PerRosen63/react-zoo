import { useLoaderData } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { AnimalPresentation } from "../components/AnimalPresentation";
import { useState } from "react";

export const Animal = () => {
  const loadedAnimal = useLoaderData() as IAnimal;
  const [animal, setAnimal] = useState<IAnimal>(loadedAnimal);
  console.log(loadedAnimal);

  const updateAnimal = (updatedAnimal: IAnimal) => {
    setAnimal(updatedAnimal);

    // Update local storage (if needed)
    const storedAnimals = localStorage.getItem("animals");
    if (storedAnimals) {
      const animals: IAnimal[] = JSON.parse(storedAnimals);
      const updatedAnimals = animals.map((a) =>
        a.id === updatedAnimal.id ? updatedAnimal : a
      );
      localStorage.setItem("animals", JSON.stringify(updatedAnimals));
    }
  };

  return (
    <>
      <AnimalPresentation
        animal={animal}
        updateAnimal={updateAnimal}
      ></AnimalPresentation>
    </>
  );
};
