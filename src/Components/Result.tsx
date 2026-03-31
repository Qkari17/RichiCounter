
export const Result = ({playerList,mode}) => {

  return (
    <section 
      className={mode === "end"?" fixed inset-0 bg-gray-600 w-full h h-full flex p-10 items-center flex-col gap-10":"hidden" }
    >
      <h1 className="text-gray-200 text-4xl ">End Screen</h1>
      <ul>
        {playerList.map((i) => (
          <li key={i.id}>
            {i.name} {i.wind}= {i.points} rank {i.rank}
          </li>
        ))}
      </ul>
    </section>
  );
};
