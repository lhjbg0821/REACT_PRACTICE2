import { useEffect, useState } from "react";
import animalData from "../animalData.json";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return -1;
    });
  }, []);
  useEffect(() => console.log(animalData), []);

  return <div>Worldcup</div>;
};

export default Worldcup;
