import { createContext, useContext, useState } from "react";

const initialPlayers = [
  {
    id: 1,
    name: "",
    wind: "East",
    points: 1,
    rank: 1,
    chombo: 0,
    dealer: true,
    winner: false,
    loser: false,
    riichi: false,
  },
  {
    id: 2,
    name: "",
    wind: "South",
    points: 4,
    rank: 1,
    chombo: 0,
    dealer: false,
    winner: false,
    loser: false,
    riichi: false,
  },
  {
    id: 3,
    name: "",
    wind: "West",
    points: 4,
    rank: 1,
    chombo: 0,
    dealer: false,
    winner: false,
    loser: false,
    riichi: false,
  },
  {
    id: 4,
    name: "",
    wind: "North",
    points: 3,
    rank: 1,
    chombo: 0,
    dealer: false,
    winner: false,
    loser: false,
    riichi: false,
  },
];

const HanContext = createContext();
export const HanProvider = ({ children }) => {
  const [playerList, setPlayerList] = useState(initialPlayers);
  const [dealer, setDealer] = useState(0);
  const [round, setRound] = useState(0);
  const [honba, setHonba] = useState(0);
  const [wind, setWind] = useState("East");
  const [tie, setTie] = useState(false);
  const honbaScore = honba * 300;
  return (
    <HanContext.Provider
      value={{
        playerList,
        setPlayerList,
        dealer,
        setDealer,
        round,
        setRound,
        honba,
        setHonba,
        wind,
        setWind,
        honbaScore,
        tie,
        setTie,
      }}
    >
      {children}
    </HanContext.Provider>
  );
};
export const useHan = () => {
  return useContext(HanContext);
};
