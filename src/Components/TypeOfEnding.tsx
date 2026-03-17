import { useState } from "react";
import { Button } from "../ui/Button/Button";
import { RonSelector } from "./RonSelector";
import { PointSelector } from "./PointSelector";

export const TypeMenu = ({ status, seter }) => {
  const [ron, setRon] = useState(true);
    const [mode, setMode] = useState("loser");
  return (
    <>
      <section
        className={
          status
            ? "hidden"
            : ron
              ? `absolute top-0 left-0 flex w-full h-full justify-center items-center flex-col `
              : "hidden"
        }
      >
        <div className="bg-blue-400 w-1/2 h-1/2 rounded-2xl flex flex-col justify-around p-10">
          <Button
            label={"Ron"}
            className={"bg-red-400"}
            onClick={() => {
              setRon((m) => !m);
            }}
          ></Button>
          <Button label={"Tsumo"} className={"bg-red-400"}></Button>
          <Button label={"Tie"} className={"bg-red-400"}></Button>
          <Button
            label={"back"}
            className={"bg-red-400"}
            onClick={() => {
              seter((m) => !m);
            }}
          ></Button>
        </div>
      </section>
      <RonSelector status={ron} mode={mode} setMode={setMode}/>
       <PointSelector mode={mode} setMode={setMode}/>
    </>
  );
};
