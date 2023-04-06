import { useEffect } from "react";
import animalData from "../animalData.json";
import { useState } from "react";
import AnimalCard from "../components/AnimalCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();
  const [choice, setChoice] = useState(0);

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return Math.random() - 0.5;
    });

    setShuffleAnimal(shuffleAnimalData);
  }, []);

  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {shuffleAnimal && (
        <>
          <AnimalCard animal={shuffleAnimal[choice]} choice={choice} />
          <div className="text-2xl mx-8 font-bold">VS</div>
          <AnimalCard animal={shuffleAnimal[choice + 1]} choice={choice} />
        </>
      )}
    </div>
  );
};

export default Worldcup;
