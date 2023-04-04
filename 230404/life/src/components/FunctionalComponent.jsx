import { useEffect, useState } from "react";

const FunctionComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);

  return <div className="bg-blue-100 h-96">FunctionComponent</div>;
};

export default FunctionComponent;
