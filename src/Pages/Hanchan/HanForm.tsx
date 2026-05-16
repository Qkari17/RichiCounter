import { Link, useNavigate } from "react-router";
import { Button } from "../../ui/Button/Button";
import { Input } from "../../ui/Button/Input";
import { initialPlayers, useHan } from "./HanContext";
import { useEffect, useState } from "react";

export const HanForm = () => {
  const [isSave, setIsSave] = useState(false);
  const {
    playerList,
    setPlayerList,
    setRound,
    setHonba,
    reset,
    commitPlayers,
    commitHonba,
    commitRound,
    
  } = useHan();
  const handlePlayerName = (e, index) => {
    const updatedPlayers = playerList.map((player, i) =>
      i === index ? { ...player, name: e.target.value } : player,
    );

    setPlayerList(updatedPlayers);
  };
  useEffect(() => {
    const storedPlayers = localStorage.getItem("players");

    if (storedPlayers) {
      setIsSave(true);
    } else {
      return;
    }
  }, []);

  return (
    <div className="bg-yellow-300 flex-col flex h-screen w-screen gap-5">
      <header className="h-10 bg-green-400 flex justify-center">
        <h1 className="font-bold text-2xl ">Richi Counter</h1>
      </header>
      <main className="p-4">
        <section className="flex flex-col p-4 bg-blue-600 rounded-2xl items-center gap-6 relative">
          <Link to="/">
            <Button
              label="<="
              className={"rounded-full bg-red-400 absolute top-4 left-4"}
            ></Button>
          </Link>
          <h1 className="text-gray-50 text-4xl">Players</h1>
          <form className="flex flex-col items-center gap-5">
            {playerList.map((player, index) => (
              <Input
                key={player.wind}
                label={player.wind}
                id={player.wind}
                value={player.name}
                onChange={(e) => handlePlayerName(e, index)}
                required
              />
            ))}
          </form>

          <Button
            className={"bg-red-400"}
            label="Next"
            onClick={() => {
              commitPlayers(initialPlayers);
              commitRound(0);
              commitHonba(0);
            
              window.location.href = "/hanboard";
            }}
          />
        </section>
        <section
          className={
            isSave
              ? `absolute top-0 left-0 flex w-full h-full justify-center items-center flex-col`
              : "hidden"
          }
        >
          <div className="bg-blue-400 w-4/5 h-1/3 rounded-2xl flex flex-col justify-around p-5 ">
            <h1 className="text-white text-2xl">
              Resume ongoing game, or start new game?
            </h1>
            <div className="flex justify-around gap-5">
              <Button
                label={"Resume"}
                className={
                  "bg-green-400 text-xl w-full py-2 rounded-xl text text-white"
                }
                onClick={() => {
                  window.location.href = "/hanboard";
                }}
              ></Button>{" "}
              <Button
                label={"New Game"}
                className={
                  "bg-red-400 text-xl w-full py-2 rounded-xl text text-white"
                }
                onClick={() => {
                  localStorage.removeItem("players");
                  localStorage.removeItem("round");
                  localStorage.removeItem("honba");
                  setPlayerList(initialPlayers);
                  setRound(0);
                  setHonba(0);
                  setIsSave(false);
                }}
              ></Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
