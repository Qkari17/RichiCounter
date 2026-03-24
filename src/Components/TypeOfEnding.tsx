import { useState } from "react";
import { Button } from "../ui/Button/Button";
import { RonSelector } from "./RonSelector";
import { PointSelector } from "./PointSelector";
import { useHan } from "../Pages/Hanchan/HanContext";
import { RiichiSelector } from "./RiichiSelector";
import { TsumoSelector } from "./TsumoSelector";
import { TieSelector } from "./TieSelector";

export const TypeMenu = ({ mode, setMode }) => {
  const [ron, setRon] = useState(false);
  const [tsumo, setTsumo] = useState(false);
  const [tie, setTie] = useState(false);

  const [score, setScore] = useState(0);
  const [scoreDealer, setScoreDealer] = useState(0);
  const [pendingWinner, setPendingWinner] = useState(null);
  const [loser, setLoser] = useState(null);
  const [ready, setReady] = useState(false);
  const { playerList, setPlayerList, honbaScore } = useHan();
  const handleScoreCalculated = (score, scoreDealer) => {
    const isDealerWinning = playerList[pendingWinner].dealer;
    const trueScore = score * 2 + scoreDealer;
    if (ron) {
      setPlayerList((prev) =>
        prev.map((player, index) => {
          if (index === pendingWinner) {
            return {
              ...player,
              winner: true,
              points: player.points + score + honbaScore,
            };
          }
          if (index === loser) {
            return {
              ...player,
              points: player.points - score - honbaScore,
            };
          }
          return player;
        }),
      );
    } else if (tsumo) {
      if (isDealerWinning) {
        setPlayerList((prev) =>
          prev.map((player, index) => {
            if (index === pendingWinner) {
              return {
                ...player,
                winner: true,
                points: player.points + score * 3 + honbaScore,
              };
            }
            return {
              ...player,
              points: player.points - score - honbaScore,
            };
          }),
        );
      } else {
        setPlayerList((prev) =>
          prev.map((player, index) => {
            if (index === pendingWinner) {
              return {
                ...player,
                winner: true,
                points: player.points + trueScore + honbaScore,
              };
            }
            else if (player.dealer) {
              return {
                ...player,
                points: player.points - scoreDealer - honbaScore,
              };
            } else
            return {
              ...player,
              points: player.points - score - honbaScore,
            };
          }),
        );
      }
    }
    console.log(trueScore);
    setScoreDealer(0);
    setPendingWinner(null);
    setScore(0);
    setReady(true);
  };
  return (
    <>
      <section
        className={
          mode === "menu"
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
          <Button
            label={"Tsumo"}
            className={"bg-red-400"}
            onClick={() => {
              setTsumo((m) => !m);
              setMode("winner");
            }}
          ></Button>
          <Button
            label={"Tie"}
            className={"bg-red-400"}
            onClick={() => {
              setTie((m) => !m);
              setMode("winner");
            }}
          ></Button>
          <Button
            label={"back"}
            className={"bg-red-400"}
            onClick={() => {
              setMode("game");
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
      <TsumoSelector
        tsumo={tsumo}
        mode={mode}
        setMode={setMode}
        setPendingWinner={setPendingWinner}
        setLoser={setLoser}
        ready={ready}
        setReady={setReady}
        pendingWinner={pendingWinner}
      />
      <TieSelector
        tie={tie}
        setMode={setMode}
        ready={ready}
        setReady={setReady}
      />
      <PointSelector
        mode={mode}
        setMode={setMode}
        score={score}
        setScore={setScore}
        onScoreCalculated={handleScoreCalculated}
        pendingWinner={pendingWinner}
        setReady={setReady}
        ron={ron}
        tsumo={tsumo}
        setScoreDealer={setScoreDealer}
      />
      <RiichiSelector
        mode={mode}
        ready={ready}
        setReady={setReady}
        setMode={setMode}
        setRon={setRon}
        setTsumo={setTsumo}
      />
    </>
  );
};
