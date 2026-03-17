import { useState } from "react";
import { useHan } from "./HanContext";
import { Button } from "../../ui/Button/Button";
import { TypeMenu } from "../../Components/TypeOfEnding";

export const HanBoard = () => {
  const { playerList, setPlayerList } = useHan();
  const [round, setRound] = useState(1);
  const [honba, setHonba] = useState(0);
  const [isMenu, setIsMenu] = useState(true);

  const handleMenu = () => {
    setIsMenu((m) => !m);
  };

  return (
    <div className="bg-yellow-300 flex-col flex h-screen w-screen gap-5 p-4">
      <main className="flex-1 p-4 bg-blue-600 rounded-2xl flex-col flex justify-between  overflow-hidden">
        <div className="flex justify-center">
          <div className="flex flex-col items-center rotate-180">
            <h1
              className={
                playerList[3].loser
                  ? "text-red-500"
                  : playerList[3].winner
                    ? "text-green-500"
                    : ""
              }
            >
              {playerList[3].name} North
            </h1>
            <p className={isMenu ? "" : "hidden"}>{playerList[3].points}</p>
          </div>
        </div>
        <div className="  flex justify-between">
          <div className="rotate-90 flex flex-col items-center">
            <h1
              className={
                playerList[2].loser
                  ? "text-red-500"
                  : playerList[2].winner
                    ? "text-green-500"
                    : ""
              }
            >
              {playerList[2].name} West
            </h1>
            <p className={isMenu ? "" : "hidden"}>{playerList[2].points}</p>
          </div>
          <div className="content-center">
            {round} {honba > 0 && `/ ${honba}`}
          </div>
          <div className="-rotate-90 flex flex-col items-center">
            <h1
              className={
                playerList[1].loser
                  ? "text-red-500"
                  : playerList[1].winner
                    ? "text-green-500"
                    : ""
              }
            >
              {playerList[1].name} South
            </h1>
            <p className={isMenu ? "" : "hidden"}>{playerList[1].points}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <h1
              className={
                playerList[0].loser
                  ? "text-red-500"
                  : playerList[0].winner
                    ? "text-green-500"
                    : ""
              }
            >
              {playerList[0].name} East
            </h1>
            <p className={isMenu ? "" : "hidden"}>{playerList[0].points}</p>
          </div>
        </div>
        <Button
          label={"X"}
          className={
            isMenu
              ? "absolute right-8 bottom-8 rounded-full bg-red-400 w-10 h-10"
              : "hidden"
          }
          onClick={handleMenu}
        ></Button>
        <TypeMenu status={isMenu} seter={setIsMenu} />
      </main>
    </div>
  );
};
