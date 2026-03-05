import { createContext, useContext, useState } from "react";

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
    wind: "North",
    points: 0,
    chombo: 0,
  },
];

const HanContext = createContext();
export const HanProvider = ({ children }) => {
  const [playerList, setPlayerList] = useState(initialPlayers);
  return (
    <HanContext.Provider value={{ playerList, setPlayerList }}>
      {children}
    </HanContext.Provider>
  );
};
export const useHan = () => {
  return useContext(HanContext);}