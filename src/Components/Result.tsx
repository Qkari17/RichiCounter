export const Result = ({ playerList, mode }) => {
  return (
    <section
      className={
        mode === "end"
          ? " fixed inset-0 bg-gray-600 w-full h h-full flex p-10 items-center flex-col gap-10"
          : "hidden"
      }
    >
      <h1 className="text-gray-200 text-4xl ">End Screen</h1>
      <ul>
        {playerList.map((player) => (
          <li
            key={player.id}
            className={
              player.rank === 1
                ? "bg-amber-300"
                : player.rank === 2
                  ? "bg-sky-200"
                  : player.rank === 3
                    ? "bg-amber-700"
                    : ""
            }
          >
            {player.name} {player.wind}= {player.points} rank {player.rank}
          </li>
        ))}
      </ul>
    </section>
  );
};
