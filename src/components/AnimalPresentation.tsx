import { IAnimal } from "../models/IAnimal";

interface IAnimalPresentationProps {
  animal: IAnimal;
  isFeedable: boolean;
  onFeed: () => void;
  onUpdateAnimal: (updatedAnimal: IAnimal) => void;
}

export const AnimalPresentation = ({
  animal,
  isFeedable,
  onFeed,
  onUpdateAnimal,
}: IAnimalPresentationProps) => {
  const handleFeedClick = () => {
    onFeed();
    const updatedAnimal = {
      ...animal,
      isFed: true,
      lastFed: new Date().toLocaleString(),
    };
    onUpdateAnimal(updatedAnimal);
  };
  return (
    <>
      <div className="single-animal">
        <h1>{animal.name}</h1>
        <p>{animal.lastFed}</p>
        <div>
          <button disabled={!isFeedable} onClick={handleFeedClick}>
            Mata mig
          </button>
        </div>
      </div>
    </>
  );
};
