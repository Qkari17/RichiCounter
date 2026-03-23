import { useState } from "react";
import { Button } from "../ui/Button/Button";
import { useHan } from "../Pages/Hanchan/HanContext";
import {
  ronDealer,
  ronNon,
  tsumoDealer,
  tsumoOnDealer,
  tsumoOnNon,
} from "./ScoringSheet";

export const PointSelector = ({
  mode,
  setMode,
  score,
  setScore,
  onScoreCalculated,
  pendingWinner,
  setReady,
  ron,
  tsumo,setScoreDealer
}) => {
  const [han, setHan] = useState(1);
  const [fu, setFu] = useState(30);

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
    let dealerValue;
    const dealerWinning = playerList[pendingWinner].dealer;
    if (ron) {
      if (dealerWinning) {
        if (han >= 13) {
          value = 48000;
        } else if (han >= 11) {
          value = 36000;
        } else if (han >= 8) {
          value = 24000;
        } else if (han >= 6) {
          value = 18000;
        } else if (han === 5) {
          value = 12000;
        } else {
          value = ronDealer[trueHan][trueFu(fu)];
        }
      } else {
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
      }
    } else if (tsumo) {
      if (dealerWinning) {
        if (han >= 13) {
          value = 16000;
        } else if (han >= 11) {
          value = 12000;
        } else if (han >= 8) {
          value = 8000;
        } else if (han >= 6) {
          value = 6000;
        } else if (han === 5) {
          value = 4000;
        } else {
          value = tsumoDealer[trueHan][trueFu(fu)];
        }
      } else {
        if (han >= 13) {
          value = 8000;
          dealerValue = 16000;
        } else if (han >= 11) {
          value = 6000;
          dealerValue = 12000;
        } else if (han >= 8) {
          value = 4000;
          dealerValue = 8000;
        } else if (han >= 6) {
          value = 3000;
          dealerValue = 6000;
        } else if (han === 5) {
          value = 2000;
          dealerValue = 4000;
        } else {
          value = tsumoOnNon[trueHan][trueFu(fu)];
          dealerValue = tsumoOnDealer[trueHan][trueFu(fu)];
        }
      }
    }
    
    setScore(value);
    setScoreDealer(dealerValue)
    setMode("winner");
    setFu(30);
    setHan(1);
    console.log(dealerValue);
    onScoreCalculated(value,dealerValue);
  };
  return (
    <>
      <main
        className={
          mode == "result"
            ? "absolute top-0 left-0 w-full h-full flex items-center justify-center"
            : "hidden"
        }
      >
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
        </section>
      </main>
    </>
  );
};
