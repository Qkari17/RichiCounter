import { Route, Routes } from "react-router";
import { HanProvider } from "./HanContext";
import { HanForm } from "./HanForm";
import { HanBoard } from "./HanBoard";

export const HanApp = () => {
  return (
    <HanProvider>
      <Routes>
        <Route path="/" element={<HanForm />} />
        <Route path="hanboard" element={<HanBoard />} />
      </Routes>
    </HanProvider>
  );
};
