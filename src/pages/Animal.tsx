import { useLoaderData } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { AnimalPresentation } from "../components/AnimalPresentation";
import { useEffect, useState } from "react";

export const Animal = () => {
  const loadedAnimal = useLoaderData() as IAnimal;
  const [animal, setAnimal] = useState<IAnimal>(loadedAnimal);
  const [isFeedable, setIsFeedable] = useState(!animal.isFed);
  console.log(loadedAnimal);

  useEffect(() => {
    const calculateRemainingTime = () => {
      const threeHoursInMillis = 3 * 60 * 60 * 1000;
      const lastFedTime = animal.lastFed
        ? new Date(animal.lastFed).getTime()
        : 0;

      const now = Date.now();
      const timeSinceLastFed = now - lastFedTime;

      console.log("Tid sedan matning", timeSinceLastFed);

      if (timeSinceLastFed >= threeHoursInMillis) {
        setIsFeedable(true);
      } else {
        // If not enough time has passed, set a timeout
        const remainingTime = threeHoursInMillis - timeSinceLastFed;
        setTimeout(() => {
          setIsFeedable(true);
        }, remainingTime);
      }
    };
    calculateRemainingTime();
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
