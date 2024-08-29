import { useLoaderData } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

export const Animal = () => {
    const animal = useLoaderData() as IAnimal;
    console.log(animal);


    return<>
    Animal 
    <h1>{animal.name}</h1>
    </>
}