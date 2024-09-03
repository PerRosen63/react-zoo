import { useState, useEffect } from "react";
import { IAnimal } from "../models/IAnimal";
import { getAnimals } from "../services/animalService";

export const useAnimals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [updateCount, setUpdateCount] = useState(0); // Add a counter

  useEffect(() => {
    getAnimals().then((data) => setAnimals(data));
  }, []);

  const updateAnimal = (updatedAnimal: IAnimal) => {
    setAnimals((prevAnimals) =>
      prevAnimals.map((a) => (a.id === updatedAnimal.id ? updatedAnimal : a))
    );
    setUpdateCount((prevCount) => prevCount + 1); // Increment the counter
  };

  return { animals, updateAnimal, updateCount }; // Return the counter
};
