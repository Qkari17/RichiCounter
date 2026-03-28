
export const Result = ({playerList}) => {
  const sortedPlayers = playerList.sort((a, b) => b.points - a.points);
  return (
    <section
      className=" fixed inset-0 bg-gray-600 w-full h h-full flex p-10 items-center
         flex-col gap-10"
    >
      <h1 className="text-gray-200 text-4xl ">End Screen</h1>
      <ul>
        {sortedPlayers.map((i) => (
          <li key={i.id}>
            {i.name} {i.wind}= {i.points}
          </li>
        ))}
      </ul>
    </section>
  );
};
