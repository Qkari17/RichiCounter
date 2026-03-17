import { useState } from "react";
import { useHan } from "../Pages/Hanchan/HanContext";
import { PointSelector } from "./PointSelector";

export const RonSelector = ({ status }) => {
  const { playerList, setPlayerList } = useHan();
  const [mode, setMode] = useState("loser");

  const handleClick = (i) => {
    const newPlayerList = playerList.slice();
    if (playerList[i].loser === true || playerList[i].winner === true) {
      return;
    }  else if (mode === "loser") {
      newPlayerList[i].loser = true;
      setPlayerList(newPlayerList);
      setMode("winner");
    }  else {
      newPlayerList[i].winner = true;
      setPlayerList(newPlayerList);
      console.log(playerList);
    }
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
          onClick={() => handleClick(3)}
          className="col-span-2 bg-amber-50"
        ></button>
        <button
          onClick={() => handleClick(1)}
          className="bg-red-400 row-span-2"
        ></button>
        <button
          onClick={() => handleClick(2)}
          className="bg-gray-500 row-span-2"
        ></button>
        <button
          onClick={() => handleClick(0)}
          className="col-span-2 bg-indigo-400"
        ></button>
       
      </section>
    </>
  );
};
