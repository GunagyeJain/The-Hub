import { useEffect, useState } from "react";
import Container from "../../components/Container";

const Stopwatch02 = () => {
  const [secondsPassed, setSecondsPassed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setSecondsPassed((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    if (!isRunning) {
      setSecondsPassed(0);
    }
  };

  const minutes = Math.floor(secondsPassed / 60);
  const seconds = secondsPassed % 60;
  const diplay = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <Container>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex justify-center pb-10 w-full text-[10rem]">
          {diplay}
        </div>
        <div className="flex justify-between items-center w-[20rem]">
          <button
            onClick={reset}
            className="bg-button text-button-text hover:bg-button-hover py-3 px-2 rounded-3xl"
          >
            {isRunning ? "Lap" : "Reset"}
          </button>
          <button
            onClick={startStop}
            className="bg-button text-button-text hover:bg-button-hover py-3 px-2 rounded-3xl"
          >
            {isRunning ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Stopwatch02;
