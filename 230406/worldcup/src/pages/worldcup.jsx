import { useEffect } from "react";
import animalData from "../animalData.json";
import { useState } from "react";
import AnimalCard from "../components/AnimalCard";
import WinAnimalCard from "../components/WinAnimalCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();
  const [choice, setChoice] = useState(0);
  const [nextRound, setNextRound] = useState([]);
  const [end, setEnd] = useState(16);

  const onClickChoice = (v) => () => {
    console.log(v);
    setChoice(choice + 2);
    //[기존에 선택된 요소들, 새로 추가한 동물(v)]
    // ... : 배열 퍼뜨리기
    setNextRound([...nextRound, v]);
  };

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return Math.random() - 0.5;
    });

    setShuffleAnimal(shuffleAnimalData);
  }, []);
  useEffect(() => {
    console.log(nextRound);
  }, [nextRound]);

  useEffect(() => {
    // nextRound에 담긴 동물들을 셔플 애니멀로 옮김.
    // nextRound 초기화 []
    // 16강 > 8강
    // 초이스 0
    if (choice === end) {
      setShuffleAnimal(nextRound);
      setNextRound([]);
      setEnd(end / 2);
      setChoice(0);
    }
  }, [choice]);

  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {shuffleAnimal &&
        (end === 1 ? (
          <WinAnimalCard animal={shuffleAnimal[choice]} />
        ) : (
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
        ))}
    </div>
  );
};

export default Worldcup;
