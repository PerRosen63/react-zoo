import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import placeholderImage from "../assets/placeholder.png";
import { calculateRemainingTimeAnimals } from "../services/calculationService";

interface IAnimalsPresentationProps {
  animals: IAnimal[];
  onUpdateAnimal: (updatedAnimal: IAnimal) => void;
}

export const AnimalsPresentation = ({ animals }: IAnimalsPresentationProps) => {
  return (
    <>
      <section className="animals">
        {animals.map((animal) => {
          const lastFedTime = animal.lastFed
            ? new Date(animal.lastFed).getTime()
            : 0;
          const remainingTime = calculateRemainingTimeAnimals(lastFedTime);
          const showFeedMessage = remainingTime === null;

          return (
            <div key={animal.id} className="animal">
              <div>
                <img
                  width="300"
                  src={animal.imageUrl}
                  alt={animal.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = placeholderImage;
                  }}
                />
              </div>
              <div>
                <h3>{animal.name}</h3>
              </div>
              <div className="short-description">
                <p>{animal.shortDescription}</p>
              </div>
              {showFeedMessage && (
                <div className="feed-message">
                  OBS!{" " + animal.name + " "} behöver matas!<br></br>Det har
                  gått mer än 4 tim.
                </div>
              )}
              <div>
                <Link to={`/animal/${animal.id}`}>Läs mer</Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
