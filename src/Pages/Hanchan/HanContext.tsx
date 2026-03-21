import { createContext,  useContext, useState } from "react";

const initialPlayers = [
  {
    name: "",
    wind: "East",
    points: 0,
    chombo: 0,
    dealer: true,
    winner: false,
    loser: false,
    riichi: false,
  },
  {
    name: "",
    wind: "South",
    points: 0,
    chombo: 0,
    dealer: false,
    winner: false,
    loser: false,
    riichi: false,
  },
  {
    name: "",
    wind: "West",
    points: 0,
    chombo: 0,
    dealer: false,
    winner: false,
    loser: false,
    riichi: false,
  },
  {
    name: "",
    wind: "North",
    points: 0,
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
      }}
    >
      {children}
    </HanContext.Provider>
  );
};
export const useHan = () => {
  return useContext(HanContext);
};
