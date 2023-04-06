const AnimalCard = ({ animal }) => {
  return (
    <div className="flex flex-col justify-norma items-center">
      <img
        className="border-8 border-white shadow-lg shadow-white w-96"
        src={`${process.env.PUBLIC_URL}/images/${animal}.jpeg`}
      />
      <div className="text-2xl mt-4 font-bold">💞{animal}💞</div>
      <button className="text-2xl mt-4 px-4 py-2 rounded-md ">선택</button>
    </div>
  );
};

export default AnimalCard;
