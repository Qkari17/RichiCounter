import { useState, useEffect, useRef } from "react";

export const useLocalStorageHistory = (key, initialValue, limit = 20) => {
  const [state, setState] = useState(initialValue);
  const [history, setHistory] = useState([]);

  const prevRef = useRef(initialValue);

useEffect(() => {
  const storedRaw = localStorage.getItem(key);

  if (!storedRaw) {
    const initialData = {
      current: initialValue,
      history: [initialValue], // 👈 tutaj zmiana
    };

    localStorage.setItem(key, JSON.stringify(initialData));

    setState(initialValue);
    setHistory([initialValue]); // 👈 i tutaj
    prevRef.current = initialValue;

    return;
  }

  const stored = JSON.parse(storedRaw);

  setState(stored.current ?? initialValue);
  setHistory(stored.history ?? [initialValue]);
  prevRef.current = stored.current ?? initialValue;
}, [key, initialValue]);
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
    let updatedHistory = [...prevHistory, prevRef.current];

    const storageData = {
      current: newState,
      history: updatedHistory,
    };

    localStorage.setItem(key, JSON.stringify(storageData));

    prevRef.current = newState;

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
      })),
    );
  };

  return [state, setValue, { commit, undo, history, reset, resetPlayer }];
};
