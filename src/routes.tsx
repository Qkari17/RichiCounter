import { HomePage } from "./Pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import { HanApp } from "./Pages/Hanchan";
import { HanBoard } from "./Pages/Hanchan/HanBoard";
import { HanProvider } from "./Pages/Hanchan/HanContext";

export const routes = {
  HOME: "/",
  HANAPP: "/hanapp/*",
  HANBOARD:"/hanboard"
};

export const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <HomePage />,
  },
  {
    path: routes.HANAPP,
    element: <HanApp />,
  },
  {
    path:routes.HANBOARD,
    element:<HanBoard/>,
  }
]);
