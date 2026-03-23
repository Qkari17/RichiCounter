import { useHan } from "../Pages/Hanchan/HanContext";

export const TsumoSelector = ({
  setMode,
  mode,
  setPendingWinner,
  setLoser,
  ready,
  setReady,
  pendingWinner,
  tsumo,
}) => {
  const { playerList, setPlayerList } = useHan();

  const handleClick = (i) => {
    if (pendingWinner !== null) return;

        setPendingWinner(i);
    setMode("result");
  };
  const handleNext = () => {
    setMode("riichi");
  };
  return (
    <>
      <section
        className={
          tsumo
            ? " absolute top-0 left-0 w-full h-full grid-cols-3 grid  "
            : "hidden"
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
