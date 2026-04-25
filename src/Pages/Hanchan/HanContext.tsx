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
const [playerList, setPlayerList, { commit: commitPlayers, undo: undoPlayers, reset, resetPlayer}] =
  useLocalStorageHistory("players", initialPlayers);

const [round, setRound, { commit: commitRound, undo: undoRound }] =
  useLocalStorageHistory("round", 0);

const [honba, setHonba, { commit: commitHonba, undo: undoHonba }] =
  useLocalStorageHistory("honba", 0);
  const [dealer, setDealer] = useState(0);
  const [wind, setWind] = useState("East");
  const [tie, setTie] = useState(false);
  const honbaScore = honba * 300;

  const undoAll = () => {
  undoPlayers();
  undoRound();
  undoHonba();
};
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
        undoAll,
        reset,
        history,
        commitPlayers,
        commitRound,
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
