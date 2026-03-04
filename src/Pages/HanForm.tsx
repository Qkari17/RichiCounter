import { useState } from "react";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Button/Input";

const initialPlayers = [
  {
    name: "",
    wind: "East",
    points: 0,
    chombo: 0,
  },
  {
    name: "",
    wind: "South",
    points: 0,
    chombo: 0,
  },
  {
    name: "",
    wind: "West",
    points: 0,
    chombo: 0,
  },
  {
    name: "",
    wind: "South",
    points: 0,
    chombo: 0,
  },
];

export const HanForm = () => {
  const [playerList, setPlayerList] = useState(initialPlayers);
  const handlePlayerName = (e, index) => {
    const updatedPlayers = [...playerList];
    updatedPlayers[index].name = e.target.value;
    setPlayerList(updatedPlayers);
  };
  return (
    <div className="bg-yellow-300 flex-col flex h-screen w-screen gap-5">
      <header className="h-10 bg-green-400 flex justify-center">
        <h1 className="font-bold text-2xl ">Richi Counter</h1>
      </header>
      <main className="p-4">
        <section className="flex flex-col p-4 bg-blue-600 rounded-2xl items-center gap-6">
          <h1 className="text-gray-50 text-4xl">Players</h1>
          <form className="flex flex-col items-center gap-5">
            {playerList.map((player, index) => (
              <Input
                key={player.wind}
                label={player.wind}
                id={player.wind}
                value={player.name}
                onChange={(e) => handlePlayerName(e, index)}
              />
            ))}
          </form>
          <Button
            className={"bg-red-400"}
            label="Next"
            type="submit"
            omClick={console.log(playerList)}
          />
        </section>
      </main>
    </div>
  );
};
