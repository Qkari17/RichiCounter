import { createContext, useState, useEffect } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
   const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("formData");
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { direction: "East", name: "", points: 0, chombo: 0 },
      { direction: "South", name: "", points: 0, chombo: 0 },
      { direction: "West", name: "", points: 0, chombo: 0 },
      { direction: "North", name: "", points: 0, chombo: 0 },
      0, 
    ];
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(items));
  }, [items]);

  const updateItem = (index, newValue) => {
    setItems((prev) => {
      const updated = [...prev];
      updated[index] = newValue; 
    });
  };

  return (
    <FormContext.Provider value={{ items, updateItem }}>
      {children}
    </FormContext.Provider>
  );
};