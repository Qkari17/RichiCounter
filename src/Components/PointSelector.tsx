import { useState } from "react";
import { Button } from "../ui/Button/Button";

export const PointSelector = () => {
  const [han, setHan] = useState(1);
  const [fu, setFu] = useState(30);
  return (
    <>
      <main className=" absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <section className="bg-fuchsia-500 p-10 rounded-4xl border-2 flex flex-col gap-2 items-center">
          <h1>Han</h1>
          <div className="flex gap-6 items-center">
            <Button
              label={"-"}
              className={"p-2 bg-amber-500 border rounded-2xl"}
            />
            <h2>{han}</h2>
            <Button
              label={"-"}
              className={"p-2 bg-amber-500 border rounded-2xl"}
            />
          </div>
          <h1>Fu</h1>
          <div className="flex gap-6 items-center">
            <Button
              label={"-"}
              className={"p-2 bg-amber-500 border rounded-2xl"}
            />
            <h2>{fu}</h2>
            <Button
              label={"-"}
              className={"p-2 bg-amber-500 border rounded-2xl"}
            />
          </div>
          <Button
            label={"ok"}
            className={"p-2 bg-amber-500 border rounded-2xl"}
          />
        </section>
      </main>
    </>
  );
};
