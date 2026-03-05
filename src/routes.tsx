import { HomePage } from "./Pages/HomePage";
import { HanForm } from "./Pages/Hanchan/HanForm";
import { createBrowserRouter } from "react-router-dom";

export const routes = {
  HOME: "/",
  HANFORM: "/hanform",
};

export const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <HomePage />,
  },
  {
    path: routes.HANFORM,
    element: <HanForm />,
  },
]);
