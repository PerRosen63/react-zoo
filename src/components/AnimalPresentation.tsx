import { IAnimal } from "../models/IAnimal";
import placeholderImage from "../assets/placeholder.png";
import { useState } from "react";

interface IAnimalPresentationProps {
  animal: IAnimal;
  isFeedable: boolean;
  onFeed: () => void;
}

export const AnimalPresentation = ({
  animal,
  isFeedable,
  onFeed,
}: IAnimalPresentationProps) => {
  const [imageLoadError, setImageLoadError] = useState(false);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <>
      <div className="single-animal">
        <h1>{animal.name}</h1>
        <div>
          <img
            width="300"
            src={animal.imageUrl}
            alt={animal.name}
            onError={(e) => {
              if (e.currentTarget.src !== placeholderImage) {
                e.currentTarget.onerror = null;
                e.currentTarget.src = placeholderImage;
                e.currentTarget.alt = "Bilden kunde inte laddas";
                e.currentTarget.dataset.error = "true";
                setImageLoadError(true);
              }
            }}
          />
          {animal.imageUrl && imageLoadError && (
            <p className="img-error-text">Kunde inte hitta bilden</p>
          )}
        </div>
        <div className="long-description">{animal.longDescription}</div>
        <p>Sista matningen: {formatDate(animal.lastFed)}</p>
        <div>
          <button disabled={!isFeedable} onClick={onFeed}>
            {isFeedable ? "Mata djuret!" : "Matad"}
          </button>
        </div>
      </div>
    </>
  );
};
