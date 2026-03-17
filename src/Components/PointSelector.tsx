import { useState } from "react";
import { Button } from "../ui/Button/Button";
import { useHan } from "../Pages/Hanchan/HanContext";
import { ronNon } from "./ScoringSheet";

export const PointSelector = () => {
  const [han, setHan] = useState(1);
  const [fu, setFu] = useState(30);
  const [score, setScore] = useState();
  const { playerList } = useHan();

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

  const trueHan = han - 1;

  const trueFu = (fu) => {
    if (fu === 20) return 0;
    if (fu === 25) return 1;
    return (fu - 20) / 10 + 1;
  };
 const HandleScoring = () => {
  let value;

  if (han >= 13) {
    value = 32000;
  } else if (han >= 11) {
    value = 24000;
  } else if (han >= 8) {
    value = 16000;
  } else if (han >= 6) {
    value = 12000;
  } else if (han === 5) {
    value = 8000;
  } else {
    value = ronNon[trueHan][trueFu(fu)];
  }

  setScore(value);
  console.log(value);
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
            onClick={() => HandleScoring()}
          />
          <h3>{trueFu(fu)}</h3>
        </section>
      </main>
    </>
  );
};
