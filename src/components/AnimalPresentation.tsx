import { useState } from "react";
import { IAnimal } from "../models/IAnimal";

interface IAnimalPresentationProps {
  animal: IAnimal;
  updateAnimal: (updatedAnimal: IAnimal) => void;
}

export const AnimalPresentation = ({
  animal,
  updateAnimal,
}: IAnimalPresentationProps) => {
  const [lastFed, setLastFed] = useState(animal.lastFed);

  const handleFeedAnimal = () => {
    setLastFed(new Date().toLocaleString());

    updateAnimal({
      ...animal,
      isFed: true,
      lastFed: new Date().toLocaleString(),
    });
  };

  return (
    <>
      <div className="single-animal">
        <h1>{animal.name}</h1>
        <p>{lastFed}</p>
        <div>
          <button disabled={animal.isFed} onClick={handleFeedAnimal}>
            Click me
          </button>
        </div>
      </div>
    </>
  );
};
