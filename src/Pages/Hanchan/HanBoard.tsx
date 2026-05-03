import { useState } from "react";
import { useHan } from "./HanContext";
import { Button } from "../../ui/Button/Button";
import { TypeMenu } from "../../Components/TypeOfEnding";
import { Result } from "../../Components/Result";
import { ChomboSelector } from "../../Components/ChomboSelector";

export const HanBoard = () => {
  const {
    honba,
    round,
    tie,
    playerList,
    setPlayerList,
    undoAll,
    resetPlayer,
  
  } = useHan();
  const [chombo, setChombo] = useState(false);
  const [mode, setMode] = useState("game");
  const viewRound = round + 1;
  const handleMenu = () => {
    setMode("menu");
    resetPlayer(setPlayerList)

  };

  return (
    <div className="bg-yellow-300 flex-col flex h-screen w-screen gap-5 p-4">
      <main className="flex-1 p-4 bg-blue-600 rounded-2xl flex-col flex justify-between  overflow-hidden">
        <div className="fixed inset-0 flex justify-center items-center -top-20 text-white">
          {mode === "loser" ? (
            <h1 className=" ">Who lost?</h1>
          ) : mode === "winner" && tie ? (
            <h1>Who was in tenpai?</h1>
          ) : mode === "riichi" ? (
            <h1>Who had riichi?</h1>
          ) : mode === "winner" ? (
            <h1>Who won?</h1>
          ) : chombo ? (
            <h1>Who made chombo?</h1>
          ) : (
            <h1></h1>
          )}
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center rotate-180">
            {playerList[2].riichi && (
              <h1 className="absolute -top-5 text-white">richi</h1>
            )}
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
            <p className={mode === "game" ? "" : "hidden"}>
              {playerList[2].points}
            </p>
          </div>
        </div>
        <div className="  flex justify-between">
          <div className="rotate-90 flex flex-col items-center">
            {playerList[3].riichi && (
              <h1 className="absolute -top-5 text-white">richi</h1>
            )}
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
            <p className={mode === "game" ? "" : "hidden"}>
              {playerList[3].points}
            </p>
          </div>
          <div className="content-center">
            {viewRound} {honba > 0 && `/ ${honba}`}
          </div>
          <div className="-rotate-90 flex flex-col items-center">
            {playerList[1].riichi && (
              <h1 className="absolute -top-5 text-white">richi</h1>
            )}
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
            <p className={mode === "game" ? "" : "hidden"}>
              {playerList[1].points}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center relative">
            {playerList[0].riichi && (
              <h1 className="absolute -top-5 text-white">richi</h1>
            )}
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
            <p className={mode === "game" ? "" : "hidden"}>
              {playerList[0].points}
            </p>
          </div>
        </div>
        <Button
          label={"X"}
          className={
            chombo
              ? "hidden"
              : mode === "game"
                ? "absolute right-8 bottom-8 rounded-full bg-red-400 w-10 h-10"
                : "hidden"
          }
          onClick={handleMenu}
        ></Button>
        <Button
          label={"chombo"}
          className={"absolute right-8 top-8 rounded-full bg-red-400 w-10 h-10"}
          onClick={() => {
            setChombo((m) => !m);
          }}
        ></Button>
        <Button
          label={"undo"}
          className={"absolute left-8 top-8 rounded-full bg-red-400 w-10 h-10"}
          onClick={() => {
           undoAll();
            resetPlayer(setPlayerList);
          }}
        ></Button>
        <TypeMenu mode={mode} setMode={setMode} />
        <Result playerList={playerList} mode={mode} />
        <ChomboSelector chombo={chombo} setChombo={setChombo} />
      </main>
    </div>
  );
};
