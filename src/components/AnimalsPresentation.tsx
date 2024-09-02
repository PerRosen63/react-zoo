import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import placeholderImage from "../assets/placeholder.png";

interface IAnimalsPresentationProps {
  animals: IAnimal[];
}

export const AnimalsPresentation = ({ animals }: IAnimalsPresentationProps) => {
  return (
    <>
      <section className="animals">
        {animals.map((animal) => (
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
            <div>
              <Link to={`/animal/${animal.id}`}>Läs mer</Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
