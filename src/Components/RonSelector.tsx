import { useHan } from "../Pages/Hanchan/HanContext";

export const RonSelector = ({ status }) => {
  const { playerList, setPlayerList } = useHan();

  const selectingLoser = (i) => {
    const newPlayerList = playerList.slice();
    newPlayerList[i].loser = true;
    setPlayerList(newPlayerList);
  };

  return (
    <>
      <section
        className={
          status
            ? "hidden "
            : "bg-amber-300 absolute top-0 left-0 w-full h-full grid-cols-3 grid opacity-0"
        }
      >
        <button
          onClick={() => selectingLoser(3)}
          className="col-span-2 bg-amber-50"
        ></button>
        <button
          onClick={() => selectingLoser(1)}
          className="bg-red-400 row-span-2"
        ></button>
        <button
          onClick={() => selectingLoser(2)}
          className="bg-gray-500 row-span-2"
        ></button>
        <button
          onClick={() => selectingLoser(0)}
          className="col-span-2 bg-indigo-400"
        ></button>
      </section>
    </>
  );
};
