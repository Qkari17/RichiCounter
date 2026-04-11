import { useState, useEffect } from "react";

export const useLocalStorageHistory = (key, initialValue,) => {
  const [state, setState] = useState(initialValue);
  const [history, setHistory] = useState([]);


  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(key));

    if (stored) {
      setState(stored.current || initialValue);
      setHistory(stored.history || []);
    }
  }, [key]);

 
  const setWithHistory = (value) => {
    setState((prev) => {
      const newValue =
        typeof value === "function" ? value(prev) : value;

      const newHistory = [...history, prev];

     
      const data = {
        current: newValue,
        history: newHistory,
      };

      localStorage.setItem(key, JSON.stringify(data));
      setHistory(newHistory);

      return newValue;
    });
  };


  const undo = () => {
    if (history.length === 0) return;

    const previous = history[history.length - 1];
    const newHistory = history.slice(0, -1);

    setState(previous);
    setHistory(newHistory);

    localStorage.setItem(
      key,
      JSON.stringify({
        current: previous,
        history: newHistory,
      })
    );
  };


  const reset = () => {
    setState(initialValue);
    setHistory([]);
    localStorage.removeItem(key);
  };


  return [state, setWithHistory, { undo, reset, history }];
};