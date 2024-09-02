import { useLoaderData } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { AnimalPresentation } from "../components/AnimalPresentation";
import { useEffect, useState } from "react";
import { calculateRemainingTimeAnimal } from "../services/calculationService";

export const Animal = () => {
  const loadedAnimal = useLoaderData() as IAnimal;
  const [animal, setAnimal] = useState<IAnimal>(loadedAnimal);
  const [isFeedable, setIsFeedable] = useState(!animal.isFed);
  console.log(loadedAnimal);

  useEffect(() => {
    const lastFedTime = animal.lastFed ? new Date(animal.lastFed).getTime() : 0;
    const remainingTime = calculateRemainingTimeAnimal(lastFedTime);

    if (remainingTime === null) {
      setIsFeedable(true);
    } else {
      const timeoutId = setTimeout(() => {
        setIsFeedable(true);
      }, remainingTime);
      return () => clearTimeout(timeoutId);
    }
  }, [animal.lastFed]);

  const handleFeedAnimal = () => {
    const now = new Date();

    setAnimal({
      ...animal,
      isFed: true,
      lastFed: now.toLocaleString(),
    });

    setIsFeedable(false);
  };

  const updateAnimal = (updatedAnimal: IAnimal) => {
    setAnimal(updatedAnimal);

    // Update local storage (if needed)
    const storedAnimals = localStorage.getItem("animals");
    if (storedAnimals) {
      const animals: IAnimal[] = JSON.parse(storedAnimals);
      const updatedAnimals = animals.map((a) =>
        a.id === updatedAnimal.id ? { ...a, ...updatedAnimal } : a
      );
      localStorage.setItem("animals", JSON.stringify(updatedAnimals));
    }
  };

  return (
    <>
      <AnimalPresentation
        animal={animal}
        isFeedable={isFeedable}
        onFeed={handleFeedAnimal}
        onUpdateAnimal={updateAnimal}
      ></AnimalPresentation>
    </>
  );
};
