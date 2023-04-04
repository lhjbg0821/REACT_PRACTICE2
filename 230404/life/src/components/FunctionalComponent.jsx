import { useState } from "react";

const FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return <div className="bg-blue-100 h-96">FunctionComponent</div>;
};

export default FunctionComponent;
