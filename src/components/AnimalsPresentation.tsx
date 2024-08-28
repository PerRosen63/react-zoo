import { IAnimal } from "../models/IAnimal";

interface IAnimalsPresentationProps {
    animals: IAnimal[];
}

export const AnimalsPresentation = ({ animals }: IAnimalsPresentationProps) => {

    return <>
    <section className="animals">
        {animals.map((animal) => (
            <div key={animal.id}>
                <h3>{animal.name}</h3>
            </div>
        ))}
    </section>
    </>
}