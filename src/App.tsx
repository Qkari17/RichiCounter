import { RouterProvider } from "react-router/dom";
import { router } from "./routes";
import { HanProvider } from "./Pages/Hanchan/HanContext";

function App() {
  return (
    <>
      <HanProvider>
        <RouterProvider router={router} />
      </HanProvider>
    </>
  );
}

export default App;
