import { useEffect } from "react";
import animalData from "../animalData.json";
import { useState } from "react";
import AnimalCard from "../components/AnimalCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();
  const [choice, setChoice] = useState(0);
  const [nextRound, setNextRound] = useState([]);

  const onClickChoice = (v) => () => {
    console.log(v);
    setChoice(choice + 2);
    //[기존에 선택된 요소들, 새로 추가한 동물(v)]
    // ... : 배열 퍼뜨리기
    setNextRound(...nextRound, v);
  };

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
          <AnimalCard
            animal={shuffleAnimal[choice]}
            choice={choice}
            onClickChoice={onClickChoice}
          />
          <div className="text-2xl mx-8 font-bold">VS</div>
          <AnimalCard
            animal={shuffleAnimal[choice + 1]}
            choice={choice + 1}
            onClickChoice={onClickChoice}
          />
        </>
      )}
    </div>
  );
};

export default Worldcup;
