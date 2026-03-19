import { useState } from "react";
import { Button } from "../ui/Button/Button";
import { RonSelector } from "./RonSelector";
import { PointSelector } from "./PointSelector";
import { useHan } from "../Pages/Hanchan/HanContext";
import { RichiSelector } from "./RichiSelector";

export const TypeMenu = ({  mode, setMode }) => {
  const [ron, setRon] = useState(true);
  const [score, setScore] = useState(null);
  const [pendingWinner, setPendingWinner] = useState(null);
  const [loser, setLoser] = useState(null);
  const [ready, setReady] = useState(false);
  const { playerList, setPlayerList } = useHan();
  const handleScoreCalculated = (score) => {
    if (pendingWinner !== null) {
      const newList = [...playerList];
      newList[pendingWinner].winner = true;
      newList[pendingWinner].points = newList[pendingWinner].points + score;
      newList[loser].points = newList[loser].points - score;
      setPlayerList(newList);
      setPendingWinner(null);
      setScore(null);
      console.log(playerList);
      setReady(true);
    }
  };
  return (
    <>
      <section
        className={
       mode=== "menu"
            
              ? `absolute top-0 left-0 flex w-full h-full justify-center items-center flex-col `
              : "hidden"
        }
      >
        <div className="bg-blue-400 w-1/2 h-1/2 rounded-2xl flex flex-col justify-around p-10">
          <Button
            label={"Ron"}
            className={"bg-red-400"}
            onClick={() => {
              setRon((m) => !m);
              setMode("loser");
            }}
          ></Button>
          <Button label={"Tsumo"} className={"bg-red-400"}></Button>
          <Button label={"Tie"} className={"bg-red-400"}></Button>
          <Button
            label={"back"}
            className={"bg-red-400"}
            onClick={() => {
              setMode("game")
            }}
          ></Button>
        </div>
      </section>
      <RonSelector
        ron={ron}
        mode={mode}
        setMode={setMode}
        setPendingWinner={setPendingWinner}
        setLoser={setLoser}
        ready={ready}
        setReady={setReady}
      />
      <PointSelector
        mode={mode}
        setMode={setMode}
        score={score}
        setScore={setScore}
        onScoreCalculated={handleScoreCalculated}
      />
      <RichiSelector
        mode={mode}
        ready={ready}
        setReady={setReady}
        setMode={setMode}
      />
    </>
  );
};
