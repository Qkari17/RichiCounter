import { useState } from "react";
import { Button } from "../ui/Button/Button";

export const PointSelector = () => {
  const [han, setHan] = useState(1);
  const [fu, setFu] = useState(30);

  const IncrementHan = () => {
    if (han >= 27) {
      return;
    } else setHan((prev) => prev + 1);
  };

  const DecrementHan = () => {
    if (han <= 1) {
      return;
    } else setHan((prev) => prev - 1);
  };

  const IncrementFu = () => {
    if (fu >= 110) {
      return;
    } else if (fu < 30) {
      setFu((prev) => prev + 5);
    } else setFu((prev) => prev + 10);
  };
  const DecrementFu = () => {
    if (fu <= 20) {
      return;
    } else if (fu <= 30) {
      setFu((prev) => prev - 5);
    } else setFu((prev) => prev - 10);
  };
  return (
    <>
      <main className=" absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <section className="bg-fuchsia-500 p-10 rounded-4xl border-2 flex flex-col gap-2 items-center">
          <h1>Han</h1>
          <div className="flex gap-6 items-center">
            <Button
              label={"-"}
              className={"p-2 bg-amber-500 border rounded-2xl"}
              onClick={DecrementHan}
            />
            <h2>{han}</h2>
            <Button
              label={"+"}
              className={"p-2 bg-amber-500 border rounded-2xl"}
              onClick={IncrementHan}
            />
          </div>
          <h1>Fu</h1>
          <div className="flex gap-6 items-center">
            <Button
              label={"-"}
              className={"p-2 bg-amber-500 border rounded-2xl"}
              onClick={DecrementFu}
            />
            <h2>{fu}</h2>
            <Button
              label={"+"}
              className={"p-2 bg-amber-500 border rounded-2xl"}
              onClick={IncrementFu}
            />
          </div>
          <Button
            label={"ok"}
            className={"p-2 bg-amber-500 border rounded-2xl px-10"}
          />
        </section>
      </main>
    </>
  );
};
