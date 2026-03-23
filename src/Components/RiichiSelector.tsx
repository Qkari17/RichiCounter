import { useHan } from "../Pages/Hanchan/HanContext";

export const RiichiSelector = ({ mode, ready, setMode, setReady, setRon, setTsumo }) => {
  const {
    playerList,
    setPlayerList,
    setRound,
    round,
    wind,
    setWind,
    setHonba,
  } = useHan();
  const handleClick = (i) => {
    const newPlayerList = playerList.slice();
    newPlayerList[i].riichi = !newPlayerList[i].riichi;
    setPlayerList(newPlayerList);
  };

  const handleEnd = () => {
    const winnerCount = playerList.filter((i) => i.winner).length;
    const riichiCount = playerList.filter((i) => i.riichi).length;
    const isHonba = playerList.some((i) => i.winner && i.dealer);
    const riichiTotal = riichiCount * 1000;
    setReady(false);
    const richiDeductor = playerList.map((i) => {
      if (i.riichi) {
        return { ...i, points: i.points - 1000 };
      }
      return i;
    });

    const riichiScore = richiDeductor.map((i) => {
      if (i.winner) {
        return { ...i, points: i.points + riichiTotal / winnerCount };
      }
      return i;
    });
    const resetPlayerList = riichiScore.map((i) => {
      return {
        ...i,
        winner: false,
        loser: false,
        riichi: false,
      };
    });
setTsumo(false)
    setRon(false);
    if (isHonba) {
      setHonba((prev) => prev + 1);
      setMode("game");
      setPlayerList(resetPlayerList);
    } else {
      const resetDealer = resetPlayerList.map((i) => {
        return {
          ...i,
          dealer: false,
        };
      });
      const updatedPlayers = resetDealer.map((i, idx) => ({
        ...i,
        dealer: idx === (round + 1) % 4,
      }));

      setPlayerList(updatedPlayers);
      setHonba(0);
      if (round === 3) {
        setRound(0);
        setWind("South");
      } else {
        setRound((prev) => prev + 1);
      }

      console.log(round);
      if (round === 3 && wind === "South") {
        setMode("end");
      } else {
        setMode("game");
      }
    }

    console.log(isHonba);
    console.log(playerList);
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
