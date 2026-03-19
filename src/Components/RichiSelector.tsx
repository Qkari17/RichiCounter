import { useHan } from "../Pages/Hanchan/HanContext";

export const RichiSelector = ({ mode, ready, setMode, setReady, setRon }) => {
  const { playerList, setPlayerList, setRound, round, wind, setWind } =
    useHan();
  const handleClick = (i) => {
    const newPlayerList = playerList.slice();
    newPlayerList[i].richi = !newPlayerList[i].richi;
    setPlayerList(newPlayerList);
  };

  const handleEnd = () => {
    const winnerCount = playerList.filter((i) => i.winner).length;
    const richiCount = playerList.filter((i) => i.richi).length;
    const richiTotal = richiCount * 1000;
    setReady(false);
    const richiDeductor = playerList.map((i) => {
      if (i.richi) {
        return { ...i, points: i.points - 1000 };
      }
      return i;
    });

    const richiScore = richiDeductor.map((i) => {
      if (i.winner) {
        return { ...i, points: i.points + richiTotal / winnerCount };
      }
      return i;
    });
    const resetPlayerList = richiScore.map((i) => {
      return { ...i, dealer: false, winner: false, loser: false, richi: false };
    });
    resetPlayerList[(round + 1) % 4].dealer = true;
    setPlayerList(resetPlayerList);
    setRon(true);
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
    console.log(mode)
  };

  return (
    <section
      className={
        mode === "richi"
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
