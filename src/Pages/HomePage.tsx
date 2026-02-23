import { Link } from "react-router";
import { Button } from "../ui/Button/Button";
import { routes } from "../routes";

export const HomePage = () => {
  return (
    <div className="bg-yellow-300 flex-col flex h-screen w-screen justify-between">
      <header className="h-10 bg-green-400 flex justify-center">
        <h1 className="font-bold text-2xl ">Richi Counter</h1>
      </header>
      <main
        className="flex justify-center
      "
      >
        <Link to={routes.HANFORM}>
          <Button
            label="Hanchan"
            className={"bg-amber-600 text-3xl hover:bg-amber-400"}
            N
          />
        </Link>
      </main>
      <footer className="h-10 bg-gray-500 flex justify-center items-end p-2">
        <p>Made by Dawid Thai Hai</p>
      </footer>
    </div>
  );
};
