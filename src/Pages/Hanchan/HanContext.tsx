import { createContext, useContext, useState } from "react";
import { useLocalStorageHistory } from "../../Hook/History";

const initialPlayers = [
  {
    id: 1,
    name: "",
    wind: "East",
    points: 0,
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
    points: 0,
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
    points: 0,
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
    points: 0,
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
  const [playerList, setPlayerList, { undo, reset, commit, resetPlayer }] =
    useLocalStorageHistory("playersData", initialPlayers);
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
        undo,
        reset,
        history,
        commit,
        resetPlayer,
      }}
    >
      {children}
    </HanContext.Provider>
  );
};
export const useHan = () => {
  return useContext(HanContext);
};
