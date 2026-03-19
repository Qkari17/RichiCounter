import { useHan } from "../Pages/Hanchan/HanContext";

export const RichiSelector = ({ mode, ready, setMode, setReady }) => {
  const { playerList, setPlayerList } = useHan();
  const handleClick = (i) => {
    const newPlayerList = playerList.slice();
    newPlayerList[i].richi = !newPlayerList[i].richi;
    setPlayerList(newPlayerList);
  };

  const handleEnd = () => {
    const winnerCount = playerList.filter((i) => i.winner).length;
    const richiCount = playerList.filter((i) => i.richi).length;
    const richiTotal = richiCount * 1000;
    console.log(richiTotal);
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
    setPlayerList(richiScore);
    console.log(richiScore);
    setReady(false);
    setMode("game");
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
