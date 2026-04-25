import { useState, useEffect, useRef } from "react";

export const useLocalStorageHistory = (key, initialValue, limit = 20) => {
  const [state, setState] = useState(initialValue);
  const [history, setHistory] = useState([]);

  const prevRef = useRef(initialValue);

  // load
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(key));

    if (stored) {
      setState(stored.current || initialValue);
      setHistory(stored.history || []);
      prevRef.current = stored.current || initialValue;
    }
  }, [key]);

  const setValue = (value) => {
    setState((prev) => {
      const newValue = typeof value === "function" ? value(prev) : value;

      prevRef.current = newValue;
      return newValue;
    });
  };

const commit = (newState) => {
 
  if (newState === undefined) return;

  setHistory((prevHistory) => {
    const updatedHistory = [...prevHistory, state]; 

    if (updatedHistory.length > limit) {
      updatedHistory.shift();
    }


    localStorage.setItem(
      key,
      JSON.stringify({
        current: newState,
        history: updatedHistory,
      })
    );

    return updatedHistory;
  });
};
  const undo = () => {
    if (history.length === 0) {
      if (state === initialValue) return;

      setState(initialValue);

      localStorage.setItem(
        key,
        JSON.stringify({
          current: initialValue,
          history: [],
        }),
      );

      return;
    }

    const previous = history[history.length - 1];
    const newHistory = history.slice(0, -1);

    setState(previous);
    setHistory(newHistory);

    localStorage.setItem(
      key,
      JSON.stringify({
        current: previous,
        history: newHistory,
      }),
    );
  };
  const reset = () => {
    setState(initialValue);
    setHistory([]);
    localStorage.removeItem(key);
  };
const resetPlayer = (setPlayerList) => {
  setPlayerList((prev) =>
    prev.map((i) => ({
      ...i,
      winner: false,
      loser: false,
      riichi: false,
    }))
  );
};

  return [state, setValue, { commit, undo, history, reset, resetPlayer }];
};
