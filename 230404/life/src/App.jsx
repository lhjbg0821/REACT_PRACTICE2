import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      {toggle && <Counter />}
      {/* {toggle ? <Counter /> : "카운터"} */}
      <button
        onClick={onClickToggle}
        className="bg-pink-300 px-4 py-2 rounded-xl text-white font-normal"
      >
        버튼
      </button>
    </div>
  );
}

export default App;
