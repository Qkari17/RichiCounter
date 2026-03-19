import { useHan } from "../Pages/Hanchan/HanContext";

  const { playerList, setPlayerList } = useHan();
export const RichiSelector = ({ mode, ready }) => {
  const handleClick = (i) => {
    const newPlayerList = playerList.slice;
   newPlayerList[i].loser= !newPlayerList[i].loser
  setPlayerList(newPlayerList)}

  const handleNext = () => {
    console.log("Next clicked");
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
        className="col-start-1 row-start-2 bg-amber-700"
      />
      <button
        onClick={() => handleClick(1)}
        className="row-start-2 col-start-3"
      />
      <button
        onClick={() => handleClick(2)}
        className="col-start-2"
      />
      <button
        onClick={() => handleClick(0)}
        className="row-start-3 col-start-2"
      />

      {ready && (
        <button
          className="bg-red-700 opacity-100 absolute right-10 bottom-10 p-2 rounded-full"
          onClick={handleNext}
        >
          XX
        </button>
      )}
    </section>
  );
  };