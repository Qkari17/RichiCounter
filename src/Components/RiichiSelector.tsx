import { useState } from "react";
import { useHan } from "../Pages/Hanchan/HanContext";

export const RiichiSelector = ({
  mode,
  ready,
  setMode,
  setReady,
  setRon,
  setTsumo,
  setTie,
  tie,
}) => {
  const {
    playerList,
    setPlayerList,
    setRound,
    round,
    wind,
    setWind,
    setHonba,
  } = useHan();
  const [riichiBase, setRiichiBase] = useState(0);
  const handleClick = (i) => {
    const newPlayerList = playerList.slice();
    newPlayerList[i].riichi = !newPlayerList[i].riichi;
    setPlayerList(newPlayerList);
  };

  const handleEnd = () => {
  const winnerCount = playerList.filter((i) => i.winner).length;
  const riichiCount =
    playerList.filter((i) => i.riichi).length + riichiBase;
  const isHonba = playerList.some((i) => i.winner && i.dealer);
  const riichiTotal = riichiCount * 1000;

  setReady(false);

  const riichiDeducted = playerList.map((i) =>
    i.riichi ? { ...i, points: i.points - 1000 } : i
  );

  let updatedList = riichiDeducted;

  if (!tie) {
    updatedList = updatedList.map((i) =>
      i.winner
        ? { ...i, points: i.points + riichiTotal / winnerCount }
        : i
    );
    setRiichiBase(0);
  } else {
    setRiichiBase(riichiCount);
  }

  const resetList = updatedList.map((i) => ({
    ...i,
    winner: false,
    loser: false,
    riichi: false,
  }));

  setTsumo(false);
  setRon(false);
  setTie(false);

  if (isHonba) {
    setHonba((prev) => prev + 1);
    setPlayerList(resetList);
    setMode("game");
    return;
  }

 
  const nextDealerIndex = (round + 1) % 4;

  const rotated = resetList.map((i, idx) => ({
    ...i,
    dealer: idx === nextDealerIndex,
  }));

  let nextRound = round;
  let nextWind = wind;

  if (round === 3) {
    nextRound = 0;
    nextWind = "South";
  } else {
    nextRound = round + 1;
  }

  setPlayerList(rotated);
  setHonba(0);
  setRound(nextRound);
  setWind(nextWind);

  if (nextRound === 3 && nextWind === "South") {
    setMode("end");
  } else {
    setMode("game");
  }
};

  return (
    <section
      className={
        mode === "riichi"
          ? "absolute top-0 left-0 w-full h-full grid grid-cols-3"
          : "hidden"
      }
    >
      <button
        onClick={() => handleClick(3)}
        className="col-start-1 row-start-2 "
      />
      <button
        onClick={() => handleClick(1)}
        className="row-start-2 col-start-3"
      />
      <button onClick={() => handleClick(2)} className="col-start-2" />
      <button
        onClick={() => handleClick(0)}
        className="row-start-3 col-start-2"
      />

      {ready && (
        <button
          className="bg-red-700 opacity-100 absolute right-10 bottom-10 p-2 rounded-full"
          onClick={handleEnd}
        >
          XX
        </button>
      )}
    </section>
  );
};
