import { useLoaderData } from "react-router-dom"
import { AnimalsPresentation } from "../components/AnimalsPresentation";
import { IAnimal } from "../models/IAnimal";

export const Animals = () => {
    const animals = useLoaderData() as IAnimal[];
    console.log(animals);

    return<>
        Animals
        <AnimalsPresentation animals={animals}></AnimalsPresentation>
    </>
}