import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

interface IAnimalsPresentationProps {
    animals: IAnimal[];
}

export const AnimalsPresentation = ({ animals }: IAnimalsPresentationProps) => {

    return <>
    <section className="animals">
        {animals.map((animal) => (
            <div key={animal.id} className="animal">
                <div><img width="300" src={animal.imageUrl} alt={animal.name} /></div>
                <div><h3>{animal.name}</h3></div>
                <div><Link to={`/animal/${animal.id}`}>Lär mer</Link></div>
            </div>
        ))}
    </section>
    </>
}