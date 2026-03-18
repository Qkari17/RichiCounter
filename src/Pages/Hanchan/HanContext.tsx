import { createContext, useContext, useState } from "react";

const initialPlayers = [
  {
    name: "",
    wind: "East",
    points: 0,
    chombo: 0,
    delear: true,
    winner: false,
    loser: false,
  },
  {
    name: "",
    wind: "South",
    points: 0,
    chombo: 0,
    delear: false,
    winner: false,
    loser: false,
  },
  {
    name: "",
    wind: "West",
    points: 0,
    chombo: 0,
    delear: false,
    winner: false,
    loser: false,
  },
  {
    name: "",
    wind: "North",
    points: 0,
    chombo: 0,
    delear: false,
    winner: false,
    loser: false,
  },
];

const HanContext = createContext();
export const HanProvider = ({ children }) => {
  const [playerList, setPlayerList] = useState(initialPlayers);
  const [dealer, setDealer] = useState(0);

  return (
    <HanContext.Provider value={{ playerList, setPlayerList, dealer, setDealer }}>
      {children}
    </HanContext.Provider>
  );
};
export const useHan = () => {
  return useContext(HanContext);
};
