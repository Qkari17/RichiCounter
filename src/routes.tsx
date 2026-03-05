import { HomePage } from "./Pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import { HanApp } from "./Pages/Hanchan";

export const routes = {
  HOME: "/",
  HANAPP: "/hanapp/*",
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
]);
