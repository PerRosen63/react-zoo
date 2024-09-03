import { useLoaderData, useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { AnimalPresentation } from "../components/AnimalPresentation";
import { useState, useEffect } from "react";
import { calculateRemainingTimeAnimal } from "../services/calculationService";
import { useAnimals } from "../hooks/useAnimals";

export const Animal = () => {
  const { animals, updateAnimal, updateCount } = useAnimals();
  const loadedAnimal = useLoaderData() as IAnimal;
  const animalId = useParams().id;
  const [currentAnimal, setCurrentAnimal] = useState<IAnimal>(loadedAnimal);
  const [isFeedable, setIsFeedable] = useState(false);

  useEffect(() => {
    const lastFedTime = currentAnimal.lastFed
      ? new Date(currentAnimal.lastFed).getTime()
      : 0;
    const remainingTime = calculateRemainingTimeAnimal(lastFedTime);

    setIsFeedable(remainingTime === null);
  }, [currentAnimal]);

  useEffect(() => {
    const updatedAnimal = animals.find(
      (a) => a.id === parseInt(animalId ?? "", 10)
    );
    if (updatedAnimal) {
      setCurrentAnimal(updatedAnimal);
    }
  }, [animals, animalId, updateCount]);
  const handleFeedAnimal = () => {
    const now = new Date();

    const updatedAnimal = {
      ...currentAnimal,
      isFed: true,
      lastFed: now.toLocaleString(),
    };

    const storedAnimals = localStorage.getItem("animals");
    if (storedAnimals) {
      const animals: IAnimal[] = JSON.parse(storedAnimals);
      const updatedAnimals = animals.map((a) =>
        a.id === updatedAnimal.id ? { ...a, ...updatedAnimal } : a
      );
      localStorage.setItem("animals", JSON.stringify(updatedAnimals));
    }

    updateAnimal(updatedAnimal);
    setIsFeedable(false);
  };

  return (
    <>
      <AnimalPresentation
        animal={currentAnimal}
        isFeedable={isFeedable}
        onFeed={handleFeedAnimal}
      ></AnimalPresentation>
    </>
  );
};
