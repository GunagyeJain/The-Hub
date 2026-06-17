import { useEffect, useState } from "react";
import Container from "../../components/Container";

Container;
const ClickCounter01 = () => {
  let [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("my_last_count");
    return savedCount !== null ? parseInt(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("my_last_count", count.toString());
  }, [count]);

  const incrementCount = () => {
    setCount(++count);
  };
  const decrementCount = () => {
    setCount(--count);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <Container>
      <div className="flex flex-col justify-center items-center w-full h-full gap-6">
        <h1 className="text-[10rem] font-bold">{count}</h1>

        <div className="flex items-center gap-3">
          <button
            onClick={incrementCount}
            className="bg-button text-button-text hover:bg-button-hover h-24 w-24 text-2xl rounded-full flex justify-center items-center transition-colors"
          >
            +
          </button>
          <button
            onClick={decrementCount}
            className="bg-button text-button-text hover:bg-button-hover h-24 w-24 text-2xl rounded-full flex justify-center items-center transition-colors"
          >
            −
          </button>
        </div>

        <button
          onClick={resetCount}
          className="bg-button text-button-text hover:bg-button-hover px-20 py-8 rounded-lg text-sm font-medium transition-colors"
        >
          Reset
        </button>
      </div>
    </Container>
  );
};

export default ClickCounter01;
