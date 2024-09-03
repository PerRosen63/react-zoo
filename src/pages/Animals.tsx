import { AnimalsPresentation } from "../components/AnimalsPresentation";
import { useAnimals } from "../hooks/useAnimals";

export const Animals = () => {
  const { animals, updateAnimal } = useAnimals();

  return (
    <>
      <AnimalsPresentation animals={animals} onUpdateAnimal={updateAnimal} />
    </>
  );
};
