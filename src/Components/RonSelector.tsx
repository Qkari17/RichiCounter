import { useHan } from "../Pages/Hanchan/HanContext";

export const RonSelector = ({
  ron,
  setMode,
  mode,
  setPendingWinner,
  setLoser,
  ready,
  setReady,
}) => {
  const { playerList, setPlayerList } = useHan();

  const handleClick = (i) => {
    const newPlayerList = playerList.slice();
    if (playerList[i].loser === true || playerList[i].winner === true) {
      return;
    } else if (mode === "loser") {
      newPlayerList[i].loser = true;
      setPlayerList(newPlayerList);
      setLoser(i);
      setMode("winner");
    } else {
      setPendingWinner(i);
      setMode("result");
    }
  };
  const handleNext = () => {
    setMode("richi");
  };
  return (
    <>
      <section
        className={
          ron
            ? "hidden"
            : " absolute top-0 left-0 w-full h-full grid-cols-3 grid  "
        }
      >
        <button
          onClick={() => handleClick(3)}
          className=" col-start-1 row-start-2 "
        ></button>
        <button
          onClick={() => handleClick(1)}
          className=" row-start-2 col-start-3"
        ></button>
        <button
          onClick={() => handleClick(2)}
          className=" col-start-2"
        ></button>
        <button
          onClick={() => handleClick(0)}
          className="row-start-3 col-start-2 "
        ></button>
        <button
          className={
            ready
              ? "bg-red-700 opacity-100 absolute right-10 bottom-10 p-2 rounded-full "
              : "hidden"
          }
          onClick={() => handleNext()}
        >
          XX
        </button>
      </section>
    </>
  );
};
