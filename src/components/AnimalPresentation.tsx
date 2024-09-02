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

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString(); // Get the time part
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <>
      <div className="single-animal">
        <h1>{animal.name}</h1>
        <p>Sista matningen: {formatDate(animal.lastFed)}</p>
        <div>
          <button disabled={!isFeedable} onClick={handleFeedClick}>
            {isFeedable ? "Mata djuret!" : "Matad"}
          </button>
        </div>
      </div>
    </>
  );
};
