export const HanBoard = () => {
  return (
    <div className="bg-yellow-300 flex-col flex h-screen w-screen gap-5 p-4">
      <main className="flex-1 p-4 bg-blue-600 rounded-2xl  flex-col flex  justify-between ">
        <div className="flex justify-center">
          <div>
            <h1>North</h1>
            <p>points</p>
          </div>
        </div>
        <div className="  flex justify-between">
          <div className="rotate-90">
            <h1>name</h1>
            <p>points</p>
          </div>
          <div className="content-center">rounds</div>
          <div className="-rotate-90">
            <h1>name</h1>
            <p>points</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <h1>South</h1>
            <p>points</p>
          </div>
        </div>
      </main>
    </div>
  );
};
