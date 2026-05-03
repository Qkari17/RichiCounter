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
    honba,
    setHonba,
    commitPlayers,
    commitRound,
    commitHonba,
  } = useHan();
  const [riichiBase, setRiichiBase] = useState(0);
  const handleClick = (i) => {
    const newPlayerList = playerList.map((p, idx) =>
      idx === i ? { ...p, riichi: !p.riichi } : p,
    );

    setPlayerList(newPlayerList);
  };
  const updateRanks = (players) => {
    const sorted = [...players].sort((a, b) => b.points - a.points);

    for (let i = 0; i < sorted.length; i++) {
      if (i > 0 && sorted[i].points === sorted[i - 1].points)
        sorted[i].rank = sorted[i - 1].rank;
      else sorted[i].rank = i + 1;
    }

    return sorted.sort((a, b) => b.id - a.id);
  };
  const umaCalculate = (players) => {
    const rankPoints = [15000, 5000, -5000, -15000];
    const groups = {};

    players.forEach((p) => {
      if (!groups[p.rank]) groups[p.rank] = [];
      groups[p.rank].push(p);
    });

    const result = [];

    Object.keys(groups)
      .map(Number)
      .sort((a, b) => a - b)
      .forEach((rank) => {
        const tied = groups[rank];
        const start = rank - 1;
        const end = start + tied.length - 1;

        let sum = 0;
        for (let i = start; i <= end; i++) sum += rankPoints[i];

        const split = sum / tied.length;

        tied.forEach((p) => {
          result.push({ ...p, points: p.points + split });
        });
      });

    return result;
  };
  const chomboCalculate = (players) => {
    return players.map((p) => ({
      ...p,
      points: p.points - p.chombo * 20000,
    }));
  };

  const handleEnd = () => {
    const winnerCount = playerList.filter((i) => i.winner).length;
    const riichiCount = playerList.filter((i) => i.riichi).length + riichiBase;
    const isHonba = playerList.some((i) => i.winner && i.dealer);
    const riichiTotal = riichiCount * 1000;

    setReady(false);

    const riichiDeducted = playerList.map((i) =>
      i.riichi ? { ...i, points: i.points - 1000 } : i,
    );

    let updatedList = riichiDeducted;

    if (!tie) {
      updatedList = updatedList.map((i) =>
        i.winner ? { ...i, points: i.points + riichiTotal / winnerCount } : i,
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
  const nextRound = round;
  const nextHonba = honba + 1; 

  setHonba(nextHonba);
  setPlayerList(resetList);
  setMode("game");

  commitPlayers(resetList);
  commitRound(nextRound);
  commitHonba(nextHonba);

  return;
}

    const nextDealerIndex = (round + 1) % 4;

    const rotated = resetList.map((i, idx) => ({
      ...i,
      dealer: idx === nextDealerIndex,
    }));

    let nextRound = round;
    const nextHonba = 0;
    let nextWind = wind;

    if (round === 3) {
      nextRound = 0;
      nextWind = "South";
    } else {
      nextRound = round + 1;
    }

    setHonba(nextHonba);
    setRound(nextRound);
    setWind(nextWind);

    let finalList = rotated;

    if (nextRound === 3 && nextWind === "South") {
      finalList = updateRanks(finalList);
      finalList = umaCalculate(finalList);
      finalList = chomboCalculate(finalList);
      finalList = updateRanks(finalList);

      setMode("end");
    } else {
      setMode("game");
    }

    const prevPlayers = playerList;

    setPlayerList(finalList);
    commitPlayers(prevPlayers);
    commitRound(nextRound);
    commitHonba(nextHonba);
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
