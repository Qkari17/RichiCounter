import { useHan } from "../Pages/Hanchan/HanContext";

export const RonSelector = ({ status }) => {
  const { playerList, setPlayerList } = useHan();

  return (
    <>
      <section
        className={
          status
            ? "hidden"
            : "bg-amber-300 absolute top-0 left-0 w-full h-full grid-cols-3 grid hidden"
        }
      >
        <button className="col-span-2 bg-amber-50"></button>
        <button className="bg-red-400 row-span-2"></button>
        <button className="bg-gray-500 row-span-2"></button>
        <button className="col-span-2 bg-indigo-400"></button>
      </section>
    </>
  );
};
