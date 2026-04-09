import { useState } from "react";
import { useHan } from "../Pages/Hanchan/HanContext";

export const ChomboSelector = ({ chombo, setChombo }) => {
  const [ready, setReady] = useState(false);
  const { playerList, setPlayerList } = useHan();

  const handleClick = (i) => {
    const newPlayerList = playerList.slice();
    newPlayerList[i].loser = !newPlayerList[i].loser;
    setPlayerList(newPlayerList);
    setReady(true);
  };
  const handleNext = () => {
    const chomboList = playerList.map((player) => {
      if (player.loser) {
        return {
          ...player,
          chombo: player.chombo + 1,
          loser: false,
        };
      }
      return player;
    });
    setPlayerList(chomboList);
    setChombo(false);
    setReady(false);
    console.log(chomboList);
  };
  return (
    <>
      <section
        className={
          chombo
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
